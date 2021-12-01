import { Component, OnInit, Input } from '@angular/core';
import { Appoints } from 'src/app/appoints';

import { faTimes } from '@fortawesome/free-solid-svg-icons';






@Component({
  selector: 'app-appoint-item',
  templateUrl: './appoint-item.component.html',
  styleUrls: ['./appoint-item.component.css']
})
export class AppointItemComponent implements OnInit {
  @Input()
  Appoints!: Appoints; 
  faTimes =faTimes;


  constructor() { }

  ngOnInit(): void {
  }

}
