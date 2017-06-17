import { Component, OnInit, forwardRef} from '@angular/core';

import {
    FormControl,
    FormGroup,
    AbstractControl,
} from '@angular/forms';

export abstract class FormControlContainer {
    abstract addControl(name: string, control: AbstractControl): void;
    abstract removeControl(name: string): void;
}

export const formGroupContainerProvider: any = {
    provide: FormControlContainer,
    useExisting: forwardRef(() => HeaderComponent)
};

import { ServerService } from '../server.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    providers: [formGroupContainerProvider, ServerService]
})
export class HeaderComponent implements OnInit, FormControlContainer {

    form: FormGroup = new FormGroup({});

    name: string = "my name"; 

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

    addControl(name: string, control: AbstractControl): void {
        this.form.addControl(name, control);
    }

    removeControl(name: string): void {
        this.form.removeControl(name);
    }

}
