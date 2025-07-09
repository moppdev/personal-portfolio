import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { ServiceComponent } from './service/service.component';
import { Services } from '../model/services.model';
import { InfoService } from '../services/info.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSquareUpwork } from '@fortawesome/free-brands-svg-icons';
import { ErrorSuccessCardComponent } from "../error-success-card/error-success-card.component";
import { LoadingComponent } from '../loading/loading.component';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-services-offered',
  standalone: true,
  imports: [ServiceComponent, FontAwesomeModule, ErrorSuccessCardComponent, LoadingComponent],
  templateUrl: './services-offered.component.html',
  styleUrl: './services-offered.component.scss'
})
export class ServicesOfferedComponent implements OnInit {
  services!: Signal<Services[]>;
  faUpwork = faSquareUpwork;
  checker: boolean = false;

  // inject the seo service to run SEO
  // This is a custom service that adds meta tags to the page
  seo = inject(SeoService);

  // Inject the InfoService
  private infoService = inject(InfoService);

  ngOnInit()
  {
     // run SEO
    this.seo.getSEO();

    // When component is initialized, check if services is defined
    // Otherwise, throw error
    try {
      this.services = signal(this.infoService.services);
      this.checker = true;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  // Function that takes the user to Upwork
  // Decided on this because implementing an a tag with the button breaks the styling
  goToUpwork()
  {
    const upwork = "https://www.upwork.com/freelancers/~013ad2ed4e7209d5f9?mp_source=share";
    window.open(upwork, "_blank");
  }
}
