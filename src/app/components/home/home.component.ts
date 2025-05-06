import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GalleryFilesDialogComponent } from 'src/app/shared/components/gallery-files-dialog/gallery-files-dialog.component';
import { Gallery } from 'src/app/shared/models/gallery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewChecked {

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  pondOptions = {
    class: 'postPond',
    multiple: false,
    allowPaste: false,
    imagePreviewHeight: 150,
    imagePreviewMaxHeight: 150,
    acceptedFileTypes: ['application/json'],
    maxFileSize: '2MB',
    labelIdle: 'Drag & Drop your JSON file or <span class="filepond--label-action"> Browse </span>'
  };
  displayedColumns: string[] = ['_id', 'partnerId', 'slug', 'actions'];
  dataSource: MatTableDataSource<Gallery> = new MatTableDataSource<Gallery>();
  paginatorInitialized = false;
  form!: FormGroup;
  json: any;

  constructor(
    private dialog: MatDialog,
    private _formBuilder: FormBuilder
  ) {
    this.setupForm();
  }

  ngOnInit() {

  }

  ngAfterViewChecked(): void {
    if (!this.paginatorInitialized && this.paginator && this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.paginatorInitialized = true;
    }
  }

  setupForm() {
    this.form = this._formBuilder.group({
      url: [null, Validators.required],
    });
  }

  async pondHandleAddFile(event: any) {
    const file: File = event.file.file;

    try {
      const text = await file.text();
      this.json = JSON.parse(text);
    } catch (error) {
      console.error('Failed to parse JSON:', error);
    }
  }

  load() {
    try {
      const galleries = (this.json as any[]).map(item => this.parseGallery(item)).filter(g => g.scenes && g.scenes.find(g => g.filesCount > 0));
      this.dataSource = new MatTableDataSource(galleries);
      this.paginatorInitialized = false;
    } catch (error) {
      console.error('Failed to load JSON data:', error);
    }
  }

  parseGallery(item: any): Gallery {
    return {
      _id: item._id?.$oid || '',
      partnerId: item.partnerId?.$oid || '',
      categoryId: item.categoryId?.$oid || '',
      date: item.date?.$date || '',
      name: item.name,
      slug: item.slug,
      scenes: item.scenes?.map((scene: any) => ({
        _id: scene._id,
        name: scene.name,
        filesCount: scene.filesCount,
        isActive: scene.isActive,
        createdAt: scene.createdAt?.$date || '',
        updatedAt: scene.updatedAt?.$date || '',
        files: scene.files?.map((f: any) => f.$oid) || []
      })),
      filesCount: item.filesCount
    };
  }

  openGalleryDialog(gallery: Gallery) {
    const galleryId = gallery._id;
    const partnerId = gallery.partnerId;

    const fileIds: string[] =
      gallery.scenes?.flatMap(scene => scene.files || []) ?? [];

    const fileUrls = fileIds.map(fileId =>
      `${this.url.value}/${partnerId}/${galleryId}/${fileId}/1920.webp`
    );

    this.dialog.open(GalleryFilesDialogComponent, {
      width: '70vw',
      maxHeight: '90vh',
      data: { files: fileUrls },
      autoFocus: false
    });
  }

  get url() { return this.form.get('url')!; }
}
