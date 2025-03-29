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
    // backdropClick

    if (!this.modal)
    {
      this.modal = this.dialog.open(MobileNavModalComponent, {
        width: '100%',
        height: '100%',
        closeOnNavigation: true,
        hasBackdrop: false,
        disableClose: true,
        enterAnimationDuration: 200,
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
    }
  }
}
