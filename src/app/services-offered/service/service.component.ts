import { Component, Input, OnInit } from '@angular/core';
import { Services } from '../../model/services.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronUp, faChevronRight } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'service',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent implements OnInit{
  @Input() service_info?: Services;
  faChevron = faChevronRight;

  ngOnInit(): void {
    console.log(this.service_info);
  }

  showDescription()
  {
    
  }

}
