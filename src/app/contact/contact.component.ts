import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgControl, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{
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
    console.log(this.contact);
  }

  onSubmit()
  {
    console.log(this.contact.controls);
    if (this.contact.invalid)
      {
        console.log("INVALID FORM");
        return;
      }
      console.log(this.contact);
  }
}
