import { Component, OnInit } from '@angular/core';
import { ServiceComponent } from './service/service.component';
import { Services } from '../model/services.model';
import { InfoService } from '../services/info.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSquareUpwork } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-services-offered',
  standalone: true,
  imports: [ServiceComponent, FontAwesomeModule],
  templateUrl: './services-offered.component.html',
  styleUrl: './services-offered.component.scss'
})
export class ServicesOfferedComponent implements OnInit {
  services?: Services[];
  faUpwork = faSquareUpwork;

  constructor(private infoService: InfoService)
  {

  }

  ngOnInit()
  {
      try {
        this.services = this.infoService.services;
      } catch (error) {
        throw new Error(`${this.infoService.returnError}`);
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
