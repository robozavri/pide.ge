import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  activeFaq = 0;

  constructor() { }

  ngOnInit(): void {
  }

  setActiveFaq(index: number) {
    console.log(index)
    if (this.activeFaq === index) {
      this.activeFaq = 99999;
    }
    this.activeFaq = index;
  }

}
