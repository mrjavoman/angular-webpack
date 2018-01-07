import { Component, OnInit, OnDestroy } from '@angular/core';
import { XComponentComService } from '../../shared/x-component-com.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { FormService } from './body.service';

declare var LZString: any;

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit, OnDestroy {
    message: string;
    subscription: any;
    form: FormGroup = new FormGroup({});
    stringValues: any;
    text: string = '';
    content: string;

    // Form Controls
    nameControl: FormControl;
    messageControl: FormControl;
    attachments: FormArray;

    constructor(private xComponentCom: XComponentComService, private formService: FormService) {

        this.content = '<p>Hello <strong>World !</strong></p>'

        this.nameControl = new FormControl('', [Validators.required])
        this.messageControl = new FormControl('');
        this.attachments = new FormArray([]);

        this.form.addControl('Name', this.nameControl);
        this.form.addControl('Message', this.messageControl);
        this.form.addControl('Attachments', this.attachments);
    }

    ngOnInit(): void {
        this.subscription = this.xComponentCom.getMessage()
            .subscribe(message => this.messageControl.setValue(message.text)
        );
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();

        this.form.removeControl('Name');
        this.form.removeControl('Message');
        this.form.removeControl('Attachments');
    }

    onAttachmentChange(event: any) {
        
        let reader = new FileReader();

        reader.onload = (f: any) => {

            let compressedString = LZString.compressToUTF16(f.currentTarget.result)
            //let myUint8Array = new Uint8Array(f.currentTarget.result)
            //let b64_val = btoa(String.fromCharCode.apply(null, myUint8Array));
            //console.log(b64_val);
                                    
            this.attachments.push(new FormControl(compressedString));
        };

        reader.readAsText(event.target.files[0]);       
    }

    onSubmit() {

        let formData = this.form.getRawValue();
        console.log(formData);

        this.formService.sendFormData(formData).subscribe(
            (response) => {
                console.log(response);
            },
            (error) => {
                console.log(error);
            }
        );
        // if (!this.form.valid) {
        //     console.log('form is INVALID!');
        //     if (this.form.hasError('required', ['firstName'])) {
        //         console.log('First name is required.');
        //     }
        //     if (this.form.hasError('required', ['lastName'])) {
        //         console.log('Last name is required.');
        //     }
        // } else {
        //     // values can be submitted using a web service here
        //     console.log(this.form.getRawValue());
        // }
    }
}
