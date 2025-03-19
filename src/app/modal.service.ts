import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MobileNavModalComponent } from './mobile-nav-modal/mobile-nav-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modal?: MatDialogRef<MobileNavModalComponent, any>;

  constructor(private dialog: MatDialog) {}

  openNavModal() {
    if (!this.modal)
    {
      this.modal = this.dialog.open(MobileNavModalComponent, {
        width: 'auto',
        height: 'auto',
        closeOnNavigation: true,
        panelClass: "nav-modal-class"
      });
    }
  }

  close() {
    if (this.modal)
    {
      this.modal.close();
      this.modal = undefined;
    }
  }
}
