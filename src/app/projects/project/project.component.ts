import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../model/project.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'project',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit {
  // Get a project as input
  @Input() project?: Project;

  // Font Awesome Icons
  faGithub = faGithub
  faChevron = faChevronRight;

  // 
  imgLink?: string;
  content?: string[];
  stack?: string[];

  ngOnInit() {
    // Get the content
    this.content = this.project?.content;

    // Generate the image link for the project
    this.imgLink = "../../../../" + this.content![0];

    // Get the stack used for the project
    this.stack = this.project?.stack;
  }
}
