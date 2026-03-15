import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
export class AlbumDetailComponent implements OnInit, OnDestroy {
  album?: Album;
  photos: Photo[] = [];
  titleInput = '';
  limit = 5;
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const snapId = Number(this.route.snapshot.paramMap.get('id'));
    if (snapId) {
      this.fetch(snapId);
      this.loadPhotos(snapId);
      this.album = undefined; 
    }

    this.route.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe((params) => {
        const id = Number(params.get('id'));
        if (id && id !== snapId) {
          this.fetch(id);
          this.loadPhotos(id);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  fetch(id: number): void {
    this.albumService.getAlbum(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((a) => {
        this.album = a;
        this.titleInput = a.title;
      });
  }

  save(): void {
    if (!this.album) {
      return;
    }
    const updated: Album = { ...this.album, title: this.titleInput };
    this.albumService.updateAlbum(updated)
      .pipe(takeUntil(this.destroy$))
      .subscribe((a) => {
        this.album = a;
        alert('Album saved');
      });
  }

  private loadPhotos(id: number): void {
    const limit = this.limit && this.limit > 0 ? this.limit : undefined;
    this.albumService.getAlbumPhotos(id, limit)
      .pipe(takeUntil(this.destroy$))
      .subscribe((list) => {
        this.photos = list;
      });
  }

  
}
