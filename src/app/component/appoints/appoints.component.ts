import { Component, OnInit } from '@angular/core';
import { appoints } from 'src/app/appointment';
import { Appoints } from 'src/app/appoints';
import {AppointmentsService} from 'src/app/services/appointments.service';





@Component({
  selector: 'app-appoints',
  templateUrl: './appoints.component.html',
  styleUrls: ['./appoints.component.css']
})
export class AppointsComponent implements OnInit {
appoints: Appoints[] = appoints;
  Appointments: any;

  constructor(private appointmentService: AppointmentsService) { }

  ngOnInit(): void {
this.appointmentService.getAppoints().subscribe((appoints) => (this.appoints = appoints));
  }

}
