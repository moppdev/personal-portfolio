import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MobileNavModalComponent } from '../mobile-nav-modal/mobile-nav-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modal?: MatDialogRef<MobileNavModalComponent, any>;

  constructor(private dialog: MatDialog) {}

  // Using Angular Material's Dialog
  // opens the modal
  openNavModal() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    // backdropClick

    if (!this.modal)
    {
      this.modal = this.dialog.open(MobileNavModalComponent, {
        width: '100%',
        height: '100%',
        closeOnNavigation: true,
        hasBackdrop: true,
        disableClose: true,
        backdropClass: "mobile-nav-backdrop",
        delayFocusTrap: true
      });

    }
  }

  // Closes the modal and puts the user back on the top of the page
  close() {
    if (this.modal)
    {
      this.modal.close();
      this.modal = undefined;
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
}
