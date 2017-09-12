import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { XComponentComService } from '../shared/x-component-com.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent
  ],
  providers: [
    XComponentComService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
