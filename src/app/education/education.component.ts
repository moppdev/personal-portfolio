import { Component, inject, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';
import { Education, Certification } from '../model/education.model';
import { CardComponent } from "./card/card.component";
import { Swiper } from 'swiper';
import { Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ErrorSuccessCardComponent } from "../error-success-card/error-success-card.component";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CardComponent, ErrorSuccessCardComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent implements OnInit {
  // TS for the Education component

  checker: boolean = false;
  errorMessage: string = "";
  
  // variables to hold relevant info, checked by corresponding models
  education?: Education[];
  certifications?: Certification[];

  // inject the InfoService
  private infoService = inject(InfoService);


  // On creation of component
  ngOnInit()
  {
    // education and certifications should be loaded and non-undefined, and Swiper.js loaded
    // Otherwise error is thrown
      try {
        this.education = this.infoService.education;
        this.certifications = this.infoService.certifications;  
        this.checker = true;

        // postpone the following
        setTimeout(() => {

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
            modules: [Navigation],
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
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const certSwiper = new Swiper(".cert-swiper", certSwiperOptions);
        }, 100);
        
      } catch (error) {
        // throw error
        this.errorMessage = "Something went wrong with retrieving information from the JSON file.";
        throw new Error(`${error}`);
      }
  }
    



}
