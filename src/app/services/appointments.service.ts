import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { appoints } from '../appointment';
import { Appoints } from '../appoints';



@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  constructor() { }
getAppoints(): Observable<Appoints[]>{
  const Appoints = of(appoints);
    return Appoints;
  }
}
