import { Component, OnInit } from '@angular/core';
import { appoints } from 'src/app/appointment';
import { Appoints } from 'src/app/appoints';




@Component({
  selector: 'app-appoints',
  templateUrl: './appoints.component.html',
  styleUrls: ['./appoints.component.css']
})
export class AppointsComponent implements OnInit {
appoints: Appoints[] = appoints;
  constructor() { }

  ngOnInit(): void {

  }

}
