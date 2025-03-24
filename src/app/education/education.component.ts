import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';
import { Education, Certification } from '../model/education.model';
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent implements OnInit {
  checker: boolean = false;
  error?: string;
  
  // variables to hold relevant info, checked by corresponding models
  education?: Education[];
  certifications?: Certification[];

  // inject the InfoService
  constructor (private infoService: InfoService)
  {

  }

  // On creation, education and certifications should be loaded and non-undefined
  // Otherwise error is thrown
  ngOnInit()
  {
     try {
      this.education = this.infoService.education;
      this.certifications = this.infoService.certifications;  
      this.checker = true;
    } catch (error) {
      this.error = this.infoService.returnError;
      throw new Error(`${error}`);
    }
  }

}
