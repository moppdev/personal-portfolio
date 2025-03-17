import { Component } from '@angular/core';
// import { RouterLink } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'mobile-nav-modal',
  standalone: true,
  //imports: [RouterLink],
  templateUrl: './mobile-nav-modal.component.html',
  styleUrl: './mobile-nav-modal.component.scss'
})
export class MobileNavModalComponent {
  constructor(private modalRef: MatDialogRef<MobileNavModalComponent>)
  {

  }

  
  close() {
    this.modalRef.close();
  }
}
