import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { XComponentComService } from '../shared/x-component-com.service';
import { ValuesService } from '../shared/values.service';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormService } from './body/body.service';

let routes: Routes = [{path: 'id', component: HeaderComponent}];
let routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    routing
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent
  ],
  providers: [
    XComponentComService,
    FormService,
    ValuesService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
