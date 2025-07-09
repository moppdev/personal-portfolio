import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { Project } from '../model/project.model';
import { InfoService } from '../services/info.service';
import { ProjectComponent } from "./project/project.component";
import { ErrorSuccessCardComponent } from "../error-success-card/error-success-card.component";
import { LoadingComponent } from '../loading/loading.component';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent, ErrorSuccessCardComponent, LoadingComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects?: Signal<Project[]>;
  checker: boolean = false;

  // Inject the InfoService
  private infoService = inject(InfoService);

    // inject the seo service to run SEO
  // This is a custom service that adds meta tags to the page
  seo = inject(SeoService);

  ngOnInit(){
    // run SEO
    this.seo.getSEO();

    // Check if projects are not undefined, otherwise throw error
    try {
      this.projects = signal(this.infoService.projects);
      this.checker = true;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
