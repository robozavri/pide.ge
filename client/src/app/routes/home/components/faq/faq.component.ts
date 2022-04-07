import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

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
