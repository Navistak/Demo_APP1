import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './template/about/about.component';
import { JobsComponent } from './template/jobs/jobs.component';
import { ClientsComponent } from './template/clients/clients.component';
import { EmployersComponent } from './template/employers/employers.component';
import { HomeComponent } from './template/home/home.component';
import { ContactUsComponent } from './template/contact-us/contact-us.component';

const routes: Routes = [
  {
    path:"home", component:HomeComponent
    },
    {
      path:"about", component:AboutComponent
    },
    {
      path:"job", component:JobsComponent
    },
    {
      path:"clients", component:ClientsComponent
    },
    {
      path:"employers", component:EmployersComponent
    },
    { 
      path:"contact-us", component:ContactUsComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
