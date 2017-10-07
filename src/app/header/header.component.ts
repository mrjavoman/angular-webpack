import { Component, OnInit, Input } from '@angular/core';
import { XComponentComService } from '../../shared/x-component-com.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @Input() name: string;
    displayMsg: string;
    subscription: Subscription;

    constructor(private xComponentCom: XComponentComService) { }

    ngOnInit() {

        this.displayMsg = `Hello ${name}, The header component works!`;
    }

    sendMessage() {
        // Send a message to body component
        this.xComponentCom.sendMessage('Message for body component');
    }
}
