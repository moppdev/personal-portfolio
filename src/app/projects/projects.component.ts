import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { Project } from '../model/project.model';
import { InfoService } from '../services/info.service';
import { ProjectComponent } from "./project/project.component";
import { ErrorSuccessCardComponent } from "../error-success-card/error-success-card.component";
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent, ErrorSuccessCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects?: Signal<Project[]>;
  checker: boolean = false;
  errorOccurred: boolean = false;

  // Inject the InfoService
  private infoService = inject(InfoService);

    // inject the seo service to run SEO
  // This is a custom service that adds meta tags to the page
  seo = inject(SeoService);

  ngOnInit(){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }); // scroll to top of page

    // Update page-specific SEO
    this.seo.updatePageSEO(
      'Projects | Marco Oppel',
      'Explore my web development projects showcasing skills in Angular, React, and modern web technologies.',
      '/projects'
    );

    // Add a small delay to show loading state
    setTimeout(() => {
      // Check if projects are not undefined, otherwise throw error
      try {
        this.projects = signal(this.infoService.projects);
        this.checker = true;
      } catch (error) {
        this.errorOccurred = true;
        throw new Error(`${error}`);
      }
    }, 300); // Reduced delay since global loading handles the main loading
  }
}
