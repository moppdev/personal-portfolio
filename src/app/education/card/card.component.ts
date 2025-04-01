import { Component, Input, OnInit } from '@angular/core';
import { isCertification, isEducation } from '../../model/education.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() info?: any;
  isEducation: boolean = false;
  isCertification: boolean = false;
  imgLink?: string;
  faChevron = faChevronRight;

  ngOnInit()
  {
    // If info is defined
    if (this.info)
    {
      // Get the image link needed
      this.imgLink = "logos/" + this.info.institution_img;

      // Check for Education and Certification types
      this.isCertification = isCertification(this.info);
      this.isEducation = isEducation(this.info);

      
      if (!this.isCertification && !this.isEducation)
      {
        // return error
      }
    }
  }

}
