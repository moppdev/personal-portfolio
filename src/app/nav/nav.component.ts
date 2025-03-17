import { Component } from '@angular/core';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { RouterLink } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MobileNavModalComponent } from '../mobile-nav-modal/mobile-nav-modal.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, MatDialogModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  faBars = faBars;

  constructor(private dialog: MatDialog) {}

  openNavModal() {
    console.log("AAAAAAAAAAAAA");
    this.dialog.open(MobileNavModalComponent, {
      width: '100vw',
      height: '100vh',
      hasBackdrop: false
    });
  }
}
