import { Component, OnInit } from '@angular/core';

import '../assets/css/styles.css';
import { ActivatedRoute } from '@angular/router';
import { env } from '../main';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  id: string;
  environment: string;

  constructor(private router: ActivatedRoute) {

    this.environment = env;
  }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.id = params['id'];
    });
  }
}
