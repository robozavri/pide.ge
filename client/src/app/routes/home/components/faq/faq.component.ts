import { Component, Input, OnInit } from '@angular/core';
import { Faq } from 'src/app/shared/models/faq';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  activeFaq: string;
  firstHalf: Faq[] = [];
  hsecondHlf: Faq[] = [];
  @Input() faqs: Faq[];

  constructor() { }

  ngOnInit(): void {
    const faqs = this.faqs;
    const half = Math.ceil(this.faqs.length / 2);
    this.firstHalf = [ ...faqs.slice(0, half)];
    this.hsecondHlf = [...faqs.slice(half)];
  }

  setActiveFaq(_id: string) {
    if (this.activeFaq === _id) {
      this.activeFaq = '';
      return;
    }
    this.activeFaq = _id;
  }

}
