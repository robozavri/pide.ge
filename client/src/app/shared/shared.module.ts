import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ResourceUrlPipe } from './pipes/resource-url.pipe';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LangService } from './services/lang.service';
import { CookieService } from 'ngx-cookie-service';
import { CommonApiService } from './http/common-api.service';
import { FaqApiService } from './http/faq-api.service';
import { RequestedWalkerApiService } from './http/requested-walker-api.service';
import { StoryApiService } from './http/story-api.service';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    ResourceUrlPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  exports: [
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ResourceUrlPipe,
    TranslateModule,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        LangService,
        TranslateService,
        AuthService,
        CookieService,
        StoryApiService,
        RequestedWalkerApiService,
        FaqApiService,
        CommonApiService,
      ]
    };
  }
}
