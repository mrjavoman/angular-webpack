import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class FormService {

    constructor(private http: Http) {}

    sendFormData(data: any) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
        return this.http.post('http://localhost:2826/api/test', data)
    }
}