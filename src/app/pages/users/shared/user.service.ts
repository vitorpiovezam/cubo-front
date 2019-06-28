import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from './user.model';
import { Inject, Injectable, Injector } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    public apiPath: string = 'http://localhost:8080/users';

    constructor(public http: HttpClient) {
    }

    getAll(): Observable<User[]> {
        return this.http.get<User[]>(this.apiPath);
    }

    create(user: User): Observable<User> {
        return this.http.post<User>(this.apiPath, user);
    }

}
