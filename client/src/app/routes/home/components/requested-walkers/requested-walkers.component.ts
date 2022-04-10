import { Component, Input, OnInit } from '@angular/core';
import { RequestedWalker } from 'src/app/shared/models/requested-walker';

@Component({
  selector: 'app-requested-walkers',
  templateUrl: './requested-walkers.component.html',
  styleUrls: ['./requested-walkers.component.scss']
})
export class RequestedWalkersComponent implements OnInit {

  @Input() walkers: RequestedWalker[];

  constructor() { }

  ngOnInit(): void {
  }

}
