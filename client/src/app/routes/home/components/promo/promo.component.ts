import { Component, Input, OnInit } from '@angular/core';
import { Common } from 'src/app/shared/models/common';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
import { LangService } from 'src/app/shared/services/lang.service';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {

  @Input() promo: Common['promo'];

  screenSize = 0;
  title: any;

  constructor(
    private sanitizer: DomSanitizer,
    private langService: LangService,
  ) { }

  ngOnInit(): void {
    this.screenSize = window.innerWidth;
    this.title = this.sanitizer.bypassSecurityTrustHtml(this.promo.title[this.langService.getCurrent()]);
    this.langService.getCurrentStram().subscribe((lang) => {
      this.title =  this.sanitizer.bypassSecurityTrustHtml(this.promo.title[lang]);
    });
  }
}
