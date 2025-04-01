import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { RouterLink } from '@angular/router';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  // Font Awesome Icon
  faBars = faBars;

  // Inject the ModalService
  private modal = inject(ModalService)

  // Open the mobile nav modal
  openNavModal() {
    // call function from service
    this.modal.openNavModal(); 
  }
}
