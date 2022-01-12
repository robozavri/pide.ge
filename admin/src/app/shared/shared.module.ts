import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatDialogModule,
  MatSidenavModule,
  MatListModule,
  MatPaginatorModule,
  MatTooltipModule,
  MatSelectModule,
  MatToolbarModule,
  MatCardModule,
  MatTabsModule,
  MatCheckboxModule,
  MatTreeModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatStepperModule,
  MatExpansionModule,
  MatDividerModule,
  MatGridListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatRadioModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatRippleModule } from '@angular/material/core';
import { LoadingService } from './services/loading.service';
import { AuthService } from './services/auth.service';
import { UserApiService } from './http/user-api.service';
import { FileApiService } from './http/files-api.service';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { ResourceUrlPipe } from './pipes/resource-url.pipe';
import { MetaApiService } from './http/meta-api.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MapLocationComponent } from './components/map-location/map-location.component';
import { MetaFormComponent } from './components/meta-form/meta-form.component';
import { ConfirmDeleteModalComponent } from './modals/confirm-delete/confirm-delete-modal.component';
import { QuillModule } from 'ngx-quill';
import { CalendarApiService } from './http/calendar-api.service';
import { SnackBarService } from './services/snack-bar.service';
import { ImagesUploadComponent } from './components/images-upload/images-upload.component';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatFormFieldModule,
    FlexLayoutModule,
    QuillModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    FileUploadComponent,
    ImageUploadComponent,
    ImagesUploadComponent,
    ResourceUrlPipe,
    FlexLayoutModule,
    MapLocationComponent,
    ConfirmDeleteModalComponent,
    MetaFormComponent,
    QuillModule,
  ],
  declarations: [
    FileUploadComponent,
    ResourceUrlPipe,
    ImageUploadComponent,
    ImagesUploadComponent,
    MapLocationComponent,
    MetaFormComponent,
    ConfirmDeleteModalComponent
  ],
  entryComponents: [],
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'en' },
        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
        UserApiService,
        LoadingService,
        AuthService,
        FileApiService,
        MetaApiService,
        CalendarApiService,
        SnackBarService,
      ]
    };
  }
} 
