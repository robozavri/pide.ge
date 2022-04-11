import { Component, OnInit } from '@angular/core';
import { CommonApiService } from 'src/app/shared/http/common-api.service';
import { Common } from 'src/app/shared/models/common';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
import { LangService } from 'src/app/shared/services/lang.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})
export class PolicyComponent implements OnInit {

  policy: Common['policy'];
  content: any;

  constructor(
    private commonApiService: CommonApiService,
    private sanitizer: DomSanitizer,
    private langService: LangService,
  ) { }

  ngOnInit(): void {
    this.commonApiService.getOne().subscribe((data) => {
      this.policy = data.policy;
      this.content = this.sanitizer.bypassSecurityTrustHtml(this.policy.content[this.langService.getCurrent()]);
    });
    this.langService.getCurrentStram().subscribe((lang) => {
      this.content = this.sanitizer.bypassSecurityTrustHtml(this.policy.content[lang]); ;
    });
  }

}
