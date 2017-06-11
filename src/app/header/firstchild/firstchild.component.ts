/**
 * Created by Xavi on 6/11/2017.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {FormControlContainer} from "../header.component";

@Component({
    selector: 'app-firstchild',
    templateUrl: './firstchild.component.html',
    styleUrls: ['./firstchild.component.css']
})
export class FirstChildComponent implements OnInit, OnDestroy {

    firstName: FormControl;

    constructor(private _parent: FormControlContainer) {
        this.firstName = new FormControl('', Validators.required);
        this._parent.addControl('firstName', this.firstName);
    }

    ngOnInit() {

    }

    ngOnDestroy() {
        this._parent.removeControl('firstName');
    }
}