import { Component, inject, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';
import { ErrorSuccessCardComponent } from "../error-success-card/error-success-card.component";
import { SeoService } from '../services/seo.service';

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

  // inject the seo service to run SEO
  // This is a custom service that adds meta tags to the page
  seo = inject(SeoService);

  // check if JSON is truthy
  checker: boolean = false;
  errorMessage: string = "";

  // get the paragraph that will display on the component
  about?: string;

  // picture of me
  pic: string = "";

  ngOnInit() 
  {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }); // scroll to top of page

    // preload the image based on the screen size
    this.pic = (window.innerWidth < 600) ? "marco_mobile.jpg" : "marco.jpg";
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = this.pic;
    link.setAttribute('fetchpriority', 'high');
    document.head.appendChild(link);

    // run SEO
    this.seo.getSEO();

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
