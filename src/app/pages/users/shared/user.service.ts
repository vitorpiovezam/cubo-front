import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from './user.model';
import { Inject, Injectable, Injector } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    public http: HttpClient
    public apiPath: string = 'localhost:8000/users';

    constructor(public httpClient : HttpClient) {
    }

    getAll(): Observable<User[]> {
        return this.http.get(this.apiPath).pipe(
            map(this.jsonDataToResources.bind(this)),
            catchError(this.handleError),
        );
    }

    create(resource: User): Observable<User> {
        return this.http.post(this.apiPath, resource).pipe(
            map(() => resource),
            catchError(this.handleError)
        );
    }
    protected jsonDataToResources(jsonData: any[]): User[] {
        const resources: User[] = [];
        jsonData.forEach(element => resources.push(this.jsonDataToResourceFn(element)));
        return resources;
    }

    protected jsonDataToResourceFn(jsonData: any) {
        return Object.assign(new User(), jsonData);
    }

    protected handleError(error: any): Observable<any> {
        console.log('request error -> ', error);
        return throwError(error);
    }
}
