import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Album } from '../models/album';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';
  private readonly REDUCED_ALBUM_COUNT = 6;
  private readonly PHOTOS_PER_ALBUM = 8;

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.baseUrl}/albums`).pipe(
      map((albums) =>
        // take first N albums and remap ids to 1..N for a smaller dataset
        albums.slice(0, this.REDUCED_ALBUM_COUNT).map((a, i) => ({
          ...a,
          id: i + 1,
        }))
      )
    );
  }

  getAlbum(id: number): Observable<Album> {
    // Return album from the reduced albums list
    return this.getAlbums().pipe(map((albums) => albums.find((a) => a.id === id)!));
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    // Fetch all photos and redistribute them evenly across the reduced album set
    return this.http.get<Photo[]>(`${this.baseUrl}/photos`).pipe(
      map((photos) =>
        photos.map((p) => ({
          ...p,
          // reassign albumId into the range [1..REDUCED_ALBUM_COUNT]
          albumId: ((p.id - 1) % this.REDUCED_ALBUM_COUNT) + 1,
          url: `https://picsum.photos/600/600?random=${p.id}`,
          thumbnailUrl: `https://picsum.photos/150/150?random=${p.id}`,
        }))
      ),
      // then filter for the requested reduced album id and limit count
      map((photos) => photos.filter((p) => p.albumId === id).slice(0, this.PHOTOS_PER_ALBUM))
    );
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.baseUrl}/albums/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/albums/${id}`);
  }

  addPhoto(photo: Partial<Photo>): Observable<Photo> {
    return this.http.post<Photo>(`${this.baseUrl}/photos`, photo);
  }
}
