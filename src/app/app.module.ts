import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LocationStrategy, PathLocationStrategy, registerLocaleData } from '@angular/common';
import { HttpService } from './shared/services/http/http.service';
import { NgxMaskModule } from 'ngx-mask';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { DatePipe } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FilePondModule, registerPlugin } from 'ngx-filepond';
import * as FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import * as FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import * as FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import * as FilePondPluginImagePreview from 'filepond-plugin-image-preview';

/* Components */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { NgxFileHelpersModule } from 'ngx-file-helpers';
import { GalleryFilesDialogComponent } from './shared/components/gallery-files-dialog/gallery-files-dialog.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


registerLocaleData(localePt);
registerPlugin(FilePondPluginFileValidateType);
registerPlugin(FilePondPluginFileValidateSize);
registerPlugin(FilePondPluginFileEncode);
registerPlugin(FilePondPluginImagePreview);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    MenuComponent,
    GalleryFilesDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    CurrencyMaskModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatExpansionModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatProgressBarModule,
    MatTableModule,
    MatDialogModule,
    MatSortModule,
    MatTooltipModule,
    MatSelectModule,
    MatAutocompleteModule,
    NgxSpinnerModule,
    MatPaginatorModule,
    NgxFileHelpersModule,
    FilePondModule,
    NgxSkeletonLoaderModule
  ],
  providers: [
    // { provide: LOCALE_ID, useValue: 'pt-BR' },
    //{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    [DatePipe],
    HttpService,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
