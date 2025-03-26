import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';
import { Education, Certification } from '../model/education.model';
import { CardComponent } from "./card/card.component";
import { Swiper } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
  swiper?: any;
  
  // variables to hold relevant info, checked by corresponding models
  education?: Education[];
  certifications?: Certification[];

  // inject the InfoService
  constructor (private infoService: InfoService)
  {

  }


  ngOnInit()
  {
    const swiperParams: SwiperOptions = {
      modules: [Navigation, Pagination],
      slidesPerView: 2,
      spaceBetween: 50,
      direction: 'horizontal',
      pagination: {
        el: '.swiper-pagination',
      },
      on: {
        init: function () {
          console.log('swiper initialized');
        },
      },
    };
    
    this.swiper = new Swiper('.swiper', swiperParams);
    //console.log(this.swiper);

      // On creation, education and certifications should be loaded and non-undefined
  // Otherwise error is thrown
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
