/**
 * Created by Xavi on 6/11/2017.
 */
import {Component, OnDestroy} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {FormControlContainer} from "../header.component";

@Component({
    selector: 'app-secondchild',
    templateUrl: './secondchild.component.html',
    styleUrls: ['./secondchild.component.css']
})
export class SecondChildComponent implements OnDestroy {

    lastName: FormControl;

    constructor(private _parent: FormControlContainer) {
        this.lastName = new FormControl('', Validators.required);
        this._parent.addControl('lastName', this.lastName);
    }

    ngOnDestroy() {
        this._parent.removeControl('lastName');
    }

}