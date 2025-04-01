import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-error-success-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './error-success-card.component.html',
  styleUrl: './error-success-card.component.scss'
})
export class ErrorSuccessCardComponent {
  
faXmark = faXmark;
faCheck = faCheck;
resultType: boolean = false;



}
