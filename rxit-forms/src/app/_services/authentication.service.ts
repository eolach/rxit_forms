import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { API_URL } from '../env';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>(`${API_URL}/login`, { username: username, password: password })
            .pipe(map(user => {
                localStorage.setItem('participant', JSON.stringify(user));
                // localStorage.setItem('participant_type', JSON.stringify(user.participant_type));
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        // localStorage.removeItem('participantType');
        // localStorage.removeItem('participantId');
    }
}
