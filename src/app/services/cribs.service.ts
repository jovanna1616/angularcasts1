import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
// to be able to transform values that will get from http
import 'rxjs/add/operator/map';


@Injectable()
export class CribsService {

  public newCribSubject = new Subject<any>();

  constructor(private http: Http) { }

  getAllCribs() {
    return this.http.get('data/cribs.json')
    .map(res => res.json());
  }

  // making communication between add-listing-form and crib-listing components:
  // add-listing-form componen is gonna send data
  // crib-listing component will subscribe(listen) for that data
  addCrib(data) {
    data.image = 'default-crib';
    this.newCribSubject.next(data);
  }

}
