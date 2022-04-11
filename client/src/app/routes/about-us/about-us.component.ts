import { Component, OnInit } from '@angular/core';
import { CommonApiService } from 'src/app/shared/http/common-api.service';
import { Common } from 'src/app/shared/models/common';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
import { LangService } from 'src/app/shared/services/lang.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  aboutUs: Common['aboutUs'];
  content: any;

  constructor(
    private commonApiService: CommonApiService,
    private sanitizer: DomSanitizer,
    private langService: LangService,
  ) { }

  ngOnInit(): void {
    this.commonApiService.getOne().subscribe((data) => {
      this.aboutUs = data.aboutUs;
      this.content = this.sanitizer.bypassSecurityTrustHtml(this.aboutUs.content[this.langService.getCurrent()]);
    });
    this.langService.getCurrentStram().subscribe((lang) => {
      this.content = this.sanitizer.bypassSecurityTrustHtml(this.aboutUs.content[lang]); ;
    });
  }

}
