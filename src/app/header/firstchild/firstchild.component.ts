/**
 * Created by Xavi on 6/11/2017.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators, FormArray } from "@angular/forms";
import {FormControlContainer} from "../header.component";

import { ServerService } from '../../server.service';


@Component({
    selector: 'app-firstchild',
    templateUrl: './firstchild.component.html',
    styleUrls: ['./firstchild.component.css']
})
export class FirstChildComponent implements OnInit, OnDestroy {

    nameArray: FormArray;

    constructor(private _parent: FormControlContainer, private serverService: ServerService) {

        this.nameArray = new FormArray([]);
    }

    ngOnInit() {
         this.serverService.getUsers().subscribe(
            (response) => {
                console.log(response);
                
                this.nameArray.push(new FormControl({name: JSON.parse(response.text())[0].firstname, value: false }));
                this.nameArray.push(new FormControl({name: JSON.parse(response.text())[1].firstname, value: false}));

                this._parent.addControl('nameArray', this.nameArray);                
            },
            (error) => console.log(error)
        );
    }

    ngOnDestroy() {
        this._parent.removeControl('nameArray');
    }
}