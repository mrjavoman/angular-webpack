import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ValuesService {

    constructor(private http: Http) { }

     getValues() {
    //     return this.http.get('http://localhost:2147/api/values');
    }
}