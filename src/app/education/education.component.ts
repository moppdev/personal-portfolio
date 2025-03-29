import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';
import { Education, Certification } from '../model/education.model';
import { CardComponent } from "./card/card.component";
import { Swiper } from 'swiper';
import { Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { AboutComponent } from "../about/about.component";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CardComponent, AboutComponent],
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


  ngOnInit()
  {
    // On creation, education and certifications should be loaded and non-undefined
    // Otherwise error is thrown
      try {
        this.education = this.infoService.education;
        this.certifications = this.infoService.certifications;  
        this.checker = true;
        setTimeout(() => {
          const eduSwiperOptions: SwiperOptions = {
            modules: [Navigation],
            direction: 'horizontal',
            navigation: {
              prevEl: ".education-prev",
              nextEl: ".education-next"
            }
          };
    
          const eduSwiper = new Swiper(".education-swiper", eduSwiperOptions);
    
          const certSwiperOptions: SwiperOptions = {
            modules: [Navigation],
            direction: 'horizontal',
            navigation: {
              prevEl: ".cert-prev",
              nextEl: ".cert-next"
            }
          };
    
          const certSwiper = new Swiper(".cert-swiper", certSwiperOptions);

          console.log('Swiper instance:', certSwiper);
          console.log('Swiper slides:', certSwiper.slides);
        }, 100);
      } catch (error) {
        this.error = this.infoService.returnError;
        throw new Error(`${error}`);
      }
  }
    



}
