import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleXmark, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'mobile-nav-modal',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './mobile-nav-modal.component.html',
  styleUrl: './mobile-nav-modal.component.scss'
})
export class MobileNavModalComponent {
  // Font Awesome Icons
  faClose = faCircleXmark;
  faIndicator = faCircleChevronRight;

  // Inject ModalService and Router
  public modal =  inject(ModalService);
  private router = inject(Router);

  // Function that navigates to a section and closes the modal automatically
  navNavigation(path: string)
  {
    if (path && typeof(path) == "string")
    {
      this.router.navigateByUrl(path);
      setInterval(() => {} , 200);
      this.close();
    }
  }
  
  // Close the modal
  close() {
    this.modal.close();
  }
}
