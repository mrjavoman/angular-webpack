import { Component, OnInit } from '@angular/core';

import { ServerService } from '../server.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    name: string = "my name"; 

    constructor(private serverService: ServerService) {}

    ngOnInit() {
        this.serverService.getUsers().subscribe(
            (response) => {
                console.log(response);
                this.name = JSON.parse(response.text())[0].firstname;
            },
            (error) => console.log(error)
        );
    }
}
