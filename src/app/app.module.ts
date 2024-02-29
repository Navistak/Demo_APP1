import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './template/home/home.component';
import { AboutComponent } from './template/about/about.component';
import { JobsComponent } from './template/jobs/jobs.component';
import { ClientsComponent } from './template/clients/clients.component';
import { EmployersComponent } from './template/employers/employers.component';
import { ContactUsComponent } from './template/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    JobsComponent,
    ClientsComponent,
    EmployersComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
