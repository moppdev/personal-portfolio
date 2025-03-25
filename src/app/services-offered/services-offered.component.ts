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
}
