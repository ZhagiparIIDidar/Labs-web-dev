import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriListComponent } from './categori-list.component';

describe('CategoriListComponent', () => {
  let component: CategoriListComponent;
  let fixture: ComponentFixture<CategoriListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
