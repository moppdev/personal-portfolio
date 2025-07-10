import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';
import { Education, Certification } from '../model/education.model';
import { CardComponent } from "./card/card.component";
import { Swiper } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ErrorSuccessCardComponent } from "../error-success-card/error-success-card.component";
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CardComponent, ErrorSuccessCardComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent implements OnInit, AfterViewInit {
  // TS for the Education component

  checker: boolean = false;
  errorMessage: string = "";
  
  // variables to hold relevant info, checked by corresponding models
  education?: Education[];
  certifications?: Certification[];

  // inject the InfoService
  private infoService = inject(InfoService);

    // inject the seo service to run SEO
  // This is a custom service that adds meta tags to the page
  seo = inject(SeoService);

  // On creation of component
  ngOnInit()
  {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }); // scroll to top of page

    // run SEO
    this.seo.getSEO();

    // education and certifications should be loaded and non-undefined
    // Otherwise error is thrown
      try {
        this.education = this.infoService.education;
        this.certifications = this.infoService.certifications;  
        this.checker = true;        
      } catch (error) {
        // throw error
        this.errorMessage = "Something went wrong with retrieving information from the JSON file.";
        throw new Error(`${error}`);
      }
  }

  ngAfterViewInit()
  {
              /// Use Swiper.js to make Certifications and Education more intuitive ///
          // const eduSwiperOptions: SwiperOptions = {
          //   modules: [Navigation],
          //   direction: 'horizontal',
          //   navigation: {
          //     prevEl: ".education-prev",
          //     nextEl: ".education-next"
          //   }
          // };
    
          // const eduSwiper = new Swiper(".education-swiper", eduSwiperOptions);

                // Instantiate SwiperOptions' options to use for the certSwiper instance
                const certSwiperOptions: SwiperOptions = {
                  modules: [Navigation, Pagination],
                  direction: 'horizontal',
                  spaceBetween: 20,
                  navigation: {
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next"
                  },
                  breakpoints: {
                    480: {
                      slidesPerView: 2,
                    },
                    1100: {
                      slidesPerView: 3,
                    }
                  }
                };
          
                // Create new Swiper instance
                const certSwiper = new Swiper(".cert-swiper", certSwiperOptions);
  }
    



}
