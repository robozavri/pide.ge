import { Component, OnInit } from '@angular/core';
import { LangService } from 'src/app/shared/services/lang.service';
import { langs } from 'src/app/shared/constants/lang';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  langs: any = langs;
  screenSize: number;
  showMobileMenu = false;

  constructor(
    public langService: LangService,
  ) { }


  ngOnInit() {
    this.screenSize = window.innerWidth;
  }

}
