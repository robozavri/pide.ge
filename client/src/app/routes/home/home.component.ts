import { Component, OnInit } from '@angular/core';
import { CommonApiService } from 'src/app/shared/http/common-api.service';
import { FaqApiService } from 'src/app/shared/http/faq-api.service';
import { RequestedWalkerApiService } from 'src/app/shared/http/requested-walker-api.service';
import { StoryApiService } from 'src/app/shared/http/story-api.service';
import { Common } from 'src/app/shared/models/common';
import { Faq } from 'src/app/shared/models/faq';
import { RequestedWalker } from 'src/app/shared/models/requested-walker';
import { Story } from 'src/app/shared/models/story';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  common: Common;
  stories: Story[] = [];
  walkers: RequestedWalker[] = [];
  faqs: Faq[] = [];

  constructor(
    private commonApiService: CommonApiService,
    private storyApiService: StoryApiService,
    private requestedWalkerApiService: RequestedWalkerApiService,
    private faqApiService: FaqApiService,
  ) { }

  ngOnInit(): void {
    this.commonApiService.getOne().subscribe((data) => {
      this.common = data;
    });
    this.storyApiService.getByQuery({all:true}).subscribe((data) => {
      this.stories = data.items;
    });
    this.requestedWalkerApiService.getByQuery({all:true}).subscribe((data) => {
      this.walkers = data.items;
    });
    this.faqApiService.getByQuery({limit: 6}).subscribe((data) => {
      this.faqs = data.items;
    });
  }

}
