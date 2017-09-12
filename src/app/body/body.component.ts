import { Component, OnInit, OnDestroy } from '@angular/core';
import { XComponentComService } from '../../shared/x-component-com.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit, OnDestroy {
    message: string;
    subscription: any;
    form: FormGroup = new FormGroup({});

    // Form Controls
    nameControl: FormControl;
    messageControl: FormControl;

    constructor(private xComponentCom: XComponentComService) {
        this.nameControl = new FormControl('')
        this.messageControl = new FormControl('');

        this.form.addControl('Name', this.nameControl);
        this.form.addControl('Message', this.messageControl);
    }

    ngOnInit(): void {
        this.subscription = this.xComponentCom.getMessage().subscribe(
            message => {
                this.messageControl.setValue(message.text);
            },
            error => console.log(error)
        );
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();

        this.form.removeControl('Name');
        this.form.removeControl('Message');
    }

    onSubmit() {
        if (!this.form.valid) {
            console.log('form is INVALID!');
            if (this.form.hasError('required', ['firstName'])) {
                console.log('First name is required.');
            }
            if (this.form.hasError('required', ['lastName'])) {
                console.log('Last name is required.');
            }
        } else {
            // values can be submitted using a web service here
            console.log(this.form.getRawValue());
        }
    }
}
