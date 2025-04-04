import { Component, inject, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';
import { ErrorSuccessCardComponent } from "../error-success-card/error-success-card.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ErrorSuccessCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  // TS for the About section of the website

  // inject the infoService to access the JSON
  infoService = inject(InfoService);

  // check if JSON is truthy
  checker: boolean = false;
  errorMessage: string = "";

  // get the paragraph that will display on the component
  about?: string;

  ngOnInit() 
  {
    // Check if about is defined
    try {
        this.about = this.infoService.about;
        this.checker = true;
    } catch (error) {
      this.checker = false;
      this.errorMessage = "Something went wrong with retrieving information from the JSON file.";
      throw new Error(`${error}`);
    }
  }

}
