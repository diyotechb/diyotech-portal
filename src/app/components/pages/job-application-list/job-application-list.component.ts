import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-job-application-list',
  templateUrl: './job-application-list.component.html',
  styleUrls: ['./job-application-list.component.css']
})
export class JobApplicationListComponent {
  
   jobApplications=[];


  public constructor(private appService: AppService, private router: Router) {
  }

  ngOnInit() {
      this.appService.getAllJobApplications().subscribe((jobs: any[]) => {
        this.jobApplications=jobs;
        console.log(jobs)
      })
  }



}
