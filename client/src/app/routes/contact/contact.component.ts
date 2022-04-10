import { Component, OnInit } from '@angular/core';
import { CommonApiService } from 'src/app/shared/http/common-api.service';
import { Common } from 'src/app/shared/models/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts: Common['contacts'];

  constructor(
    private commonApiService: CommonApiService,
  ) { }

  ngOnInit(): void {
    this.commonApiService.getOne().subscribe((data) => {
      this.contacts = data.contacts;
    });
  }

}
