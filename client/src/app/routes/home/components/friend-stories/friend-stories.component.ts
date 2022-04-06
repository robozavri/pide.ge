import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-friend-stories',
  templateUrl: './friend-stories.component.html',
  styleUrls: ['./friend-stories.component.scss']
})
export class FriendStoriesComponent implements OnInit {

  storiesCarouselOptions: OwlOptions;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<div class="arrow"> <img src="/assets/icons/arrow-left.png" alt="Left arrow icon" title="Left arrow icon"> </div>', '<div class="arrow"> <img src="/assets/icons/arrow-right.png" alt="Right arrow icon" title="Right arrow icon"> </div>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
    this. getStoriesCarouselOptions();
  }

  getStoriesCarouselOptions() {
    this.storiesCarouselOptions = {
      loop: true,
      dots: false,
      margin: 18,
      autoplay: false,
      lazyLoad: true,

      navText: ['<div class="arrow"> <img src="/assets/icons/arrow-left.png" alt="Left arrow icon" title="Left arrow icon"> </div>', '<div class="arrow"> <img src="/assets/icons/arrow-right.png" alt="Right arrow icon" title="Right arrow icon"> </div>'],
      items: 1,
      responsive: {
        409: {
          items: 1,
          autoplay: true,
        },
        362: {
          items: 1,
          autoplay: true,
        },
        1104: {
          items: 2,
          autoplay: true,
        },
        977: {
          items: 2,
          autoplay: true,
        },
        760: {
          margin: 2,
          autoplay: false,
          items:1,
        },
        412: {
          items: 1,
        },
        1054: {
          items: 2,
        }
      },
      nav: true,
    };
  }

}
