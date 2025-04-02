import { Component, Input } from '@angular/core';
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
// TS file that returns the component for showing errors or successes

// Font Awesome Icons
faXmark = faXmark;
faCheck = faCheck;

// Both the following variables have default values
// ResultType determines whether the card displays an error or success
@Input() resultType: boolean = false;
// message is the message that will be displayed
@Input() message: string = "Something went wrong with retrieving information from the JSON file.";



}
