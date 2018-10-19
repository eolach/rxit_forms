import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Prescriber, Dispenser, User } from './participant.model';
import { MessageService } from '../message.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class ParticipantApiService {

    constructor(
        private http: HttpClient,
        private messageService: MessageService) {
    }

    // get list of prescribers
    getPrescribers(): Observable<Prescriber[]> {
        return this.http.get<Prescriber[]>(`${environment.API_URL}/api/prescribers`)
            .pipe(
                tap(prescribers => this.log(`fetched prescribers`)),
                catchError(this.handleError('getPrescribers', []))
            );
    }

    // get an individual prescriber
    getPrescriber(id: number): Observable<Prescriber> {
        return this.http
            .get<Prescriber>(`${environment.API_URL}/api/prescribers/${id}`)
            .pipe(
                tap(_ => console.log(`fetched prescriber id=${id}`)),
                catchError(this.handleError<Prescriber>(`getPrescriber id=${id}`))
            );
    }

    updatePrescriber(prescriber: Prescriber): Observable<Prescriber> {
        return this.http
        .post<Prescriber>(`${environment.API_URL}/api`, prescriber, httpOptions)
            .pipe(
                tap(_ => this.log(`updated prescriber w/ id=${prescriber.id}`)),
                catchError(this.handleError<Prescriber>('addHero'))
            );
    }

    // get list of dispensers
    getDispensers(): Observable<Dispenser[]> {
        return this.http.get<Dispenser[]>(`${environment.API_URL}/api/dispensers`)
            .pipe(
                tap(dispensers => this.log(`fetched dispensers`)),
                catchError(this.handleError('getDispensers', []))
            );
    }

    // get an individual dispenser
    getDispenser(id: number): Observable<Dispenser> {
        return this.http
            .get<Dispenser>(`${environment.API_URL}/api/dispensers/${id}`)
            .pipe(
                tap(_ => this.log(`fetched dispenser id=${id}`)),
                catchError(this.handleError<Dispenser>(`getDispenser id=${id}`))
            );
    }

    login(username: string, password: string): Observable<User> {
        return this.http
            .post<User>(`${environment.API_URL}/api/login`, { username: username, password: password })
            .pipe(
                tap(_ => console.log(`logged in user`)),
                catchError(this.handleError<User>('logging in'))
            );
    }

    logout() {
        // remove user from local storage to log user out
        // localStorage.removeItem('participantType');
        // localStorage.removeItem('participantId');
    }


    /**
       * Handle Http operation that failed.
       * Let the app continue.
       * @param operation - name of the operation that failed
       * @param result - optional value to return as the observable result
       */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        this.messageService.add('ParticipantApiService: ' + message);
    }
}

