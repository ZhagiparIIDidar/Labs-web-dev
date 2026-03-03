import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  albumId?: number;
  newPhotoTitle = '';
  newPhotoUrl = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      if (id) {
        this.albumId = id;
        this.fetch(id);
      }
    });
  }

  fetch(id: number): void {
    this.albumService.getAlbumPhotos(id).subscribe((list) => {
      this.photos = list;
    });
  }

  addPhoto(): void {
    if (!this.albumId || !this.newPhotoTitle || !this.newPhotoUrl) return;
    const payload: Partial<Photo> = {
      albumId: this.albumId,
      title: this.newPhotoTitle,
      url: this.newPhotoUrl,
      thumbnailUrl: this.newPhotoUrl,
    };
    this.albumService.addPhoto(payload).subscribe((p) => {
      // add to the top of the list so user sees it immediately
      this.photos.unshift(p);
      this.newPhotoTitle = '';
      this.newPhotoUrl = '';
    });
  }

  back(): void {
    if (this.albumId) {
      this.router.navigate(['/albums', this.albumId]);
    } else {
      this.router.navigate(['/albums']);
    }
  }
}
