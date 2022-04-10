import { Component, OnInit } from '@angular/core';
import { CommonApiService } from 'src/app/shared/http/common-api.service';
import { FaqApiService } from 'src/app/shared/http/faq-api.service';
import { Common } from 'src/app/shared/models/common';
import { Faq } from 'src/app/shared/models/faq';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  faqsCommon: Common['faqs'];
  faqs: Faq[] = [];
  activeFaq: string;
  firstHalf: Faq[] = [];
  hsecondHlf: Faq[] = [];

  constructor(
    private commonApiService: CommonApiService,
    private faqApiService: FaqApiService,
  ) { }

  ngOnInit(): void {
    this.commonApiService.getOne().subscribe((data) => {
      this.faqsCommon = data.faqs;
    });
    this.faqApiService.getByQuery({limit: 6}).subscribe((data) => {
      this.faqs = data.items;
      const faqs = this.faqs;
      const half = Math.ceil(this.faqs.length / 2);
      this.firstHalf = [ ...faqs.slice(0, half)];
      this.hsecondHlf = [...faqs.slice(half)];
    });
  }

  setActiveFaq(_id: string) {
    if (this.activeFaq === _id) {
      this.activeFaq = '';
      return;
    }
    this.activeFaq = _id;
  }

}
