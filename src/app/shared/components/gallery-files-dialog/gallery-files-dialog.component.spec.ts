import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryFilesDialogComponent } from './gallery-files-dialog.component';

describe('GalleryFilesDialogComponent', () => {
  let component: GalleryFilesDialogComponent;
  let fixture: ComponentFixture<GalleryFilesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryFilesDialogComponent]
    });
    fixture = TestBed.createComponent(GalleryFilesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
