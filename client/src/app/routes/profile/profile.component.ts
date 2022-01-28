import { Component, OnInit } from '@angular/core';
import {Gallery} from 'angular-gallery';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  constructor(
    private gallery: Gallery
  ) { }

  ngOnInit(): void {
  }

  showGallery(index: number) {
    let prop = {
        images: [
            {path: 'assets/images/1.jpg'},
            {path: 'assets/images/2.jpg'},
            {path: 'assets/images/3.jpg'},
            {path: 'assets/images/4.jpg'},
            {path: 'assets/images/5.jpg'},
            {path: 'assets/images/6.jpg'},
        ],
        index
    };
    this.gallery.load(prop);
}

}
