import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    displayMsg: string;
    @Input() name: string;

    constructor() {}

    ngOnInit() {

        // Can string can be interpolated now
        this.displayMsg = "Hello " + this.name + ", The header component works!";
    }

    displayMessage() {

    }
}
