import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ResourceUrlPipe } from './pipes/resource-url.pipe';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LangService } from './services/lang.service';
import { CookieService } from 'ngx-cookie-service';


import {
  MatSidenavModule,
  MatButtonModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatMenuModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material';

@NgModule({
  declarations: [ResourceUrlPipe],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    TranslateModule,

    MatSidenavModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatMenuModule,
    MatToolbarModule,
  ],
  exports: [
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ResourceUrlPipe,
    TranslateModule,

    MatSidenavModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {
          duration: 2500,
        }},
        LangService,
        TranslateService,
        CookieService,
      ]
    };
  }
}
