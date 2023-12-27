import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { JobApplicationListComponent } from './components/pages/job-application-list/job-application-list.component';
import { ConsultantsComponent } from './components/pages/consultants/consultants.component';


const routes: Routes = [
  {
    path:'',component:HomeComponent 
  },
  {
    path:'job-application-list',component:JobApplicationListComponent
  },
  {
    path:'consultants',component:ConsultantsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
