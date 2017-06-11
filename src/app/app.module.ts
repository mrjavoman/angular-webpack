import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FirstChildComponent } from './header/firstchild/firstchild.component';
import { SecondChildComponent } from './header/secondchild/secondchild.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstChildComponent,
    SecondChildComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
