import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ServerService {

    constructor(private http: Http) {}

    getUsers() {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.get('http://localhost:3000/users', { headers : headers });
    }
}