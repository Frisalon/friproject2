import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

/*
  Generated class for the Firebase provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Firebase {

  constructor(public http: Http) {
    console.log('Hello Firebase Provider');
  }
  addReservation(fname,lname,email,service,date,time,note): Observable<Response> {
    //end of checking
    let body={
      Firstname: fname,
      Lastname: lname,
      Email: email,
      Service:service,
      Date: date,
      Time: time,
      Note:note
    };
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option
    let url ='https://frisalon-150317.firebaseio.com/Bookings/'+fname+'.json';
    return this.http.put(url, body, options) // ...using post request
      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }


}
