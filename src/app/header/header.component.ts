import { Component, OnInit, ViewChildren, QueryList, OnDestroy, forwardRef, Injector } from '@angular/core';

import {
    FormControl,
    FormGroup,
    ControlContainer,
    Validators,
    FormGroupDirective
} from '@angular/forms';

export abstract class FormControlContainer {
    abstract addControl(name: string, control: FormControl): void;
    abstract removeControl(name: string): void;
}

export const formGroupContainerProvider: any = {
    provide: FormControlContainer,
    useExisting: forwardRef(() => HeaderComponent)
};

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    providers: [formGroupContainerProvider]
})
export class HeaderComponent implements OnInit, FormControlContainer {

    form: FormGroup = new FormGroup({});

    constructor() {}

    ngOnInit() {

    }

    onSubmit() {
        if (!this.form.valid) {
            console.log('form is INVALID!')
            if (this.form.hasError('required', ['firstName'])) {
                console.log('First name is required.');
            }
            if (this.form.hasError('required', ['lastName'])) {
                console.log('Last name is required.');
            }
        } else {
            // values can be submitted using a web service here
            console.log(this.form);
        }
    }

    addControl(name: string, control: FormControl): void {
        this.form.addControl(name, control);
    }

    removeControl(name: string): void {
        this.form.removeControl(name);
    }

}
