import { Component, inject, OnInit } from '@angular/core';
import { Project } from '../model/project.model';
import { InfoService } from '../services/info.service';
import { ProjectComponent } from "./project/project.component";
import { ErrorSuccessCardComponent } from "../error-success-card/error-success-card.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent, ErrorSuccessCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects?: Project[]
  checker: boolean = false;

  // Inject the InfoService
  private infoService = inject(InfoService);

  ngOnInit(){
    // Check if projects are not undefined, otherwise throw error
    try {
      this.projects = this.infoService.projects;
      this.checker = true;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
