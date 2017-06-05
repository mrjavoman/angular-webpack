import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServerService } from "./server.service";
import { HttpModule } from "@angular/http";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  providers: [ServerService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
