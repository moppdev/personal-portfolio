import { Component, DestroyRef, inject, OnInit, signal, Signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailService } from '../services/email.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { ErrorSuccessCardComponent } from "../error-success-card/error-success-card.component";
import { Subscription } from 'rxjs';
import { LoadingComponent } from '../loading/loading.component';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, FontAwesomeModule, CommonModule, ErrorSuccessCardComponent, LoadingComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  // TS file for contact component

  // Inject the EmailService
  private emailService = inject(EmailService);

      // inject the seo service to run SEO
  // This is a custom service that adds meta tags to the page
  seo = inject(SeoService);

  // Get icons and set checkers
  faCheck = faCheck;
  faXmark = faXmark;
  invalids: boolean = false;
  elementSubs?: Signal<Subscription[]>;
  sent?: boolean;
  sentMessage: string = "";
  validEmailElem: boolean = false;
  validNameElem: boolean = false;
  validMessageElem: boolean = false;
  complete: boolean = false;
  destroyRef: DestroyRef = inject(DestroyRef);
  
  // Create reactive form group that connects to elements on the page
  // Add required validators
  contact: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern("^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$")
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    message: new FormControl('', [
      Validators.required
    ])
  });

  // On creation, subscribe to value changes of each form to check validity
  ngOnInit()
  {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }); // scroll to top of page

    // run SEO
    this.seo.getSEO();

    // Get the controls
    const controls =  this.contact.controls;

    // this.validEmailElem = controls["email"].valid && controls["email"].pristine;
    // this.validNameElem = controls["name"].valid && controls["email"].pristine;
    // this.validMessageElem = controls["message"].valid && !controls["message"].pristine;

    // Subscribers
    const nameChange = controls["name"].valueChanges.subscribe(() => {
        this.validNameElem = controls["name"].valid && !controls["name"].pristine;
    });

    const emailChange = controls["email"].valueChanges.subscribe(() => {
          this.validEmailElem = controls["email"].valid && !controls["email"].pristine;
    });

    const messageChange = controls["message"].valueChanges.subscribe(() => {
          this.validMessageElem = controls["message"].valid && !controls["message"].pristine;
    });

    // Add subs to array to use in OnDestroy
    this.elementSubs = signal([nameChange, emailChange, messageChange]);

        // Call onDestroy, to unsubscribe from each sub in elementSubs
        this.destroyRef.onDestroy(() => {
            this.elementSubs?.().forEach((element: Subscription) => {
              element.unsubscribe();
            })
        });
  }

  // When the form is submitted
  async onSubmit()
  {
    // Mark all inputs as touched
    this.contact.markAllAsTouched();
    // Check if the form is valid
    if (this.contact.valid)
    {
      const controls = this.contact.controls;
      // If it is, send the values of elements in form
      // in JSON format to the sendMail function in EmailService
        const params = {
          "name": controls["name"].value,
          "email": controls["email"].value,
          "message": controls["message"].value,
        }

        try {
          // Use EmailService to send mail
          const sentMail = await this.emailService.sendMail(params);
      
          if (sentMail) {
              this.sent = true;
              this.sentMessage = "Message successfully sent!";
          } else {
              this.sent = false;
              this.sentMessage = "Failed to send message. Please try again later.";
          }
      } catch (error) {
          this.sent = false;
          this.sentMessage = "An unexpected error occurred. Please try again.";
          throw new Error(`${error}`);
      }
    };

    this.complete = true;

    // hide the card
    setTimeout(() => {
      this.complete = false;
    }, 15000);

      // Reset the form
      this.contact.reset();
  }
}
