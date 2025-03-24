import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../model/project.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'project',
  standalone: true,
  imports: [FontAwesomeModule, FooterComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit {
  // Get a project as input
  @Input() project?: Project;
  faGithub = faGithub
  faChevron = faChevronRight;
  imgLink: any;
  stack: any;

  ngOnInit(): void {
    this.imgLink = this.project?.content;
    this.imgLink = "../../../../" + this.imgLink[0];

    this.stack = this.project?.stack;
  }
}
