import { Component, OnInit } from '@angular/core';
import { CommonApiService } from 'src/app/shared/http/common-api.service';
import { Common } from 'src/app/shared/models/common';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
import { LangService } from 'src/app/shared/services/lang.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  privacy: Common['privacy'];
  content: any;

  constructor(
    private commonApiService: CommonApiService,
    private sanitizer: DomSanitizer,
    private langService: LangService,
  ) { }

  ngOnInit(): void {
    this.commonApiService.getOne().subscribe((data) => {
      this.privacy = data.privacy;
      this.content = this.sanitizer.bypassSecurityTrustHtml(this.privacy.content[this.langService.getCurrent()]);
    });
    this.langService.getCurrentStram().subscribe((lang) => {
      this.content = this.sanitizer.bypassSecurityTrustHtml(this.privacy.content[lang]); ;
    });
  }

}
