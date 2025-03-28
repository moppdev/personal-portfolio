import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgControl, ReactiveFormsModule, Validators } from '@angular/forms';
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
  private emailService = inject(EmailService);
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
    this.contact.markAllAsTouched();
    this.clicked = true;

    if (this.contact.valid)
    {
        let params = {
          "name": this.contact.controls["name"].value,
          "email": this.contact.controls["email"].value,
          "message": this.contact.controls["message"].value,
        }
        
        if (await this.emailService.sendMail(params))
        {
          this.sent = true;
        }
    };
    this.contact.reset();
  }
}
