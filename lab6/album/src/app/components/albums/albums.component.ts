import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit, OnDestroy {
  albums: Album[] = [];
  private destroy$ = new Subject<void>();

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.fetch();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  fetch(): void {
    this.albumService.getAlbums()
      .pipe(takeUntil(this.destroy$))
      .subscribe((list) => {
        this.albums = list;
      });
  }

  delete(id: number): void {
    this.albumService.deleteAlbum(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.albums = this.albums.filter((a) => a.id !== id);
      });
  }
}
