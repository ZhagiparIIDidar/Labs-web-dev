import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class AlbumPhotosComponent implements OnInit, OnDestroy {
  photos: Photo[] = [];
  albumId?: number;
  limit = 20; // default number of photos to fetch (0 = all)
  private destroy$ = new Subject<void>();
  
  constructor(private route: ActivatedRoute, private albumService: AlbumService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.albumId = id;
      this.fetch(id);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  fetch(id: number): void {
    const limit = this.limit && this.limit > 0 ? this.limit : undefined;
    this.albumService.getAlbumPhotos(id, limit)
      .pipe(takeUntil(this.destroy$))
      .subscribe((list) => {
        this.photos = list.slice(0, this.limit || list.length);
      });
  }

  onLimitChange(): void {
    if (this.albumId) this.fetch(this.albumId);
  }
}

  
  

