import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleXmark, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { ModalService } from '../modal.service';

@Component({
  selector: 'mobile-nav-modal',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './mobile-nav-modal.component.html',
  styleUrl: './mobile-nav-modal.component.scss'
})
export class MobileNavModalComponent {
  faClose = faCircleXmark;
  faIndicator = faCircleChevronRight;

  constructor(private modal: ModalService)
  {

  }

  
  close() {
    this.modal.close();
  }
}
