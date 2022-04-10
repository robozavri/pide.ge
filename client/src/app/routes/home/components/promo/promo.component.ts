import { Component, Input, OnInit } from '@angular/core';
import { Common } from 'src/app/shared/models/common';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {

  @Input() promo: Common['promo'];

  screenSize = 0;
  constructor() { }

  ngOnInit(): void {
    this.screenSize = window.innerWidth;
  }

}
