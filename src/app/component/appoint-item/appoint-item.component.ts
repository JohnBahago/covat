import { Component, OnInit, Input } from '@angular/core';
import { Appoints } from 'src/app/appoints';








@Component({
  selector: 'app-appoint-item',
  templateUrl: './appoint-item.component.html',
  styleUrls: ['./appoint-item.component.css']
})
export class AppointItemComponent implements OnInit {
  @Input()
  Appoints!: Appoints; 


  constructor() { }

  ngOnInit(): void {
  }

}
