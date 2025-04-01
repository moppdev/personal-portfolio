import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailService } from '../services/email.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, FontAwesomeModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  // TS file for contact component

  // Inject the EmailService
  private emailService = inject(EmailService);

  // Get icons and set checkers
  faCheck = faCheck;
  faXmark = faXmark;
  invalids: boolean = false;
  sent: boolean = false;
  clicked: boolean = false;
  
  // Create reactive form group that connects to elements on the page
  // Add required validators
  contact: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    message: new FormControl('', [
      Validators.required
    ])
  });

  ngOnInit()
  {

  }

  // When the form is submitted
  async onSubmit()
  {
    // Mark all inputs as touched
    this.contact.markAllAsTouched();
    
    
    this.clicked = true;

    // Check if the form is valid
    if (this.contact.valid)
    {
      // If it is, send the values of elements in form
      // in JSON format to the sendMail function in EmailService
        const params = {
          "name": this.contact.controls["name"].value,
          "email": this.contact.controls["email"].value,
          "message": this.contact.controls["message"].value,
        }
        
        // Use EmailService to send mail
        if (await this.emailService.sendMail(params))
        {
          this.sent = true;
        }
    };

    // Reset the form
    this.contact.reset();
  }
}
