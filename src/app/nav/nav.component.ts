import { Component } from '@angular/core';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { RouterLink } from '@angular/router';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MobileNavModalComponent } from '../mobile-nav-modal/mobile-nav-modal.component';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, MatDialogModule],
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
