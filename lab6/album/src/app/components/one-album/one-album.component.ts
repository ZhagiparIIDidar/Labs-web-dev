import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './one-album.component.html',
  styleUrls: ['./one-album.component.css'],
})
export class AlbumDetailComponent implements OnInit {
  album?: Album;
  photos: Photo[] = [];
  titleInput = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      if (id) {
        this.fetch(id);
        this.loadPhotos(id);
      }
    });
  }

  fetch(id: number): void {
    this.albumService.getAlbum(id).subscribe((a) => {
      this.album = a;
      this.titleInput = a.title;
    });
  }

  save(): void {
    if (!this.album) {
      return;
    }
    const updated: Album = { ...this.album, title: this.titleInput };
    this.albumService.updateAlbum(updated).subscribe((a) => {
      this.album = a;
      alert('Album saved');
    });
  }

  private loadPhotos(id: number): void {
    this.albumService.getAlbumPhotos(id).subscribe((list) => {
      this.photos = list;
    });
  }

  back(): void {
    this.router.navigate(['/albums']);
  }
}
