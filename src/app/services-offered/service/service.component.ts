import { Component, Input } from '@angular/core';
import { Services } from '../../model/services.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { NgClass } from '@angular/common';

@Component({
  selector: 'service',
  standalone: true,
  imports: [FontAwesomeModule, NgClass],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {
  @Input() service_info?: Services;
  faChevron = faChevronRight;
  opened: boolean = false;

  toggleDescription()
  {
    this.opened = !this.opened;
    if (this.opened)
    {
      this.faChevron = faChevronDown;
    }
    else
    {
      this.faChevron = faChevronRight;
    }
  }

}
