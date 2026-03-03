import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.fetch();
  }

  fetch(): void {
    this.albumService.getAlbums().subscribe((list) => {
      this.albums = list;
    });
  }

  delete(id: number): void {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter((a) => a.id !== id);
    });
  }
}
