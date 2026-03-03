import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPhotosComponent } from './photo.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AlbumPhotosComponent', () => {
  let component: AlbumPhotosComponent;
  let fixture: ComponentFixture<AlbumPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumPhotosComponent, RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumPhotosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
