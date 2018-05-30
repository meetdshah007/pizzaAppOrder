import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { OrderComponent } from './order/order.component';
import { SummaryComponent } from './summary/summary.component';
import { MaterialModule } from './material.module';

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
    SummaryComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
