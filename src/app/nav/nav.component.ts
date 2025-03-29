import { Component } from '@angular/core';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { RouterLink } from '@angular/router';
import { ModalService } from '../services/modal.service';
import { slidingNavAnimation } from '../model/animations';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  animations: [slidingNavAnimation],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  faBars = faBars;

  constructor(private modal: ModalService) {}

  openNavModal() {
    // call function from service
    this.modal.openNavModal(); 
  }
}
