import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

import { API_URL } from './env';

import { Dispenser, dispensers } from './data-model';

@Injectable()
export class DispenserService {

	constructor(private http: HttpClient) {}
	
//	private handleError(error: HttpErrorResponse | any) {
//		if (error.error instanceof ErrorEvent) {
//		    // A client-side or network error occurred. Handle it accordingly.
//		    console.error('An error occurred:', error.error.message);
//		} else {
 		   // The backend returned an unsuccessful response code.
		    // The response body may contain clues as to what went wrong,
		    //console.error(
		    //  `Backend returned code ${error.status}, ` +
		    //  `body was: ${error.error}`);
//		}
		  // return an observable with a user-facing error message
//		return throw( 'Something bad happened; please try again later.');
//	};

	getDispensers(): Observable<Dispenser[]>{
		return this.http
		   .get<Dispenser[]>(`${ API_URL }/dispensers`)
		   //.pipe(catchError(this.handleError)
	}

	// Fake server update; assume nothing can go wrong
	updateDispenser(dispenser: Dispenser): Observable<Dispenser> {
		const oldDispenser = dispensers.find(d => d.id == dispenser.id );
		const newDispenser = Object.assign(oldDispenser, dispenser);
		return of(newDispenser);
	}
}
