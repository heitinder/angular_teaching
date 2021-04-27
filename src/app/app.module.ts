import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidenavComponent } from './sidenav/sidenav/sidenav.component';
import { TopComponent } from './main/top/top/top.component';
import { DataTableComponent } from './main/dataTable/data-table/data-table.component';
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TopComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
