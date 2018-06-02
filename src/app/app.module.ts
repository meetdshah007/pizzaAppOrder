import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { OrderComponent } from './order/order.component';
import { SummaryComponent } from './summary/summary.component';
import { MDBBootstrapModule  } from 'angular-bootstrap-md';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  { path: 'order', component: OrderComponent },
  { path: 'summary', component: SummaryComponent },
  { path: '', component: DashComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    OrderComponent,
    SummaryComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
