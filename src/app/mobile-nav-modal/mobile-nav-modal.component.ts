import { Component } from '@angular/core';
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
  faClose = faCircleXmark;
  faIndicator = faCircleChevronRight;

  constructor(public modal: ModalService, private router: Router)
  {

  }

  navNavigation(path: string)
  {
    if (path && typeof(path) == "string")
    {
      this.router.navigateByUrl(path);
      setInterval(() => {} , 200);
      this.close();
    }
  }
  
  close() {
    this.modal.close();
  }
}
