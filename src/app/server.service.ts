import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServerService {

    constructor(private http: Http) {}

    getUsers(servers: any[]) {
        this.http.get('http://localhost:3000/users', servers);
    }
}