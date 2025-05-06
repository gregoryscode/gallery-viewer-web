import { Component, HostListener, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-gallery-files-dialog',
  templateUrl: './gallery-files-dialog.component.html',
  styleUrls: ['./gallery-files-dialog.component.css']
})
export class GalleryFilesDialogComponent {
  files: string[] = [];
  currentIndex = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { files: string[] }) {
    this.files = data.files;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowRight':
        this.next();
        break;
      case 'ArrowLeft':
        this.previous();
        break;
    }
  }

  next() {
    if (this.currentIndex < this.files.length - 1) {
      this.currentIndex++;
    }
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
