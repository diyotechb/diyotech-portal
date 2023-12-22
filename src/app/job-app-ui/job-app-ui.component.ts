import {Component, OnInit} from '@angular/core';
import {JobApplicationService} from "../job-application.service";
import {Job} from "../job.model";

@Component({
  selector: 'app-job-app-ui',
  templateUrl: './job-app-ui.component.html',
  styleUrls: ['./job-app-ui.component.css']
})
export class JobAppUIComponent implements OnInit{

  jobApplication: Job[] | undefined;
  constructor(private jobApp: JobApplicationService) {
  }

  ngOnInit() {
    this.jobApp.getJobs().subscribe((data)=>{
      this.jobApplication = data;
      console.log(data);
    })
  }
}
