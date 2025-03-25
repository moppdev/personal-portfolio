import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() {

  }

  sendMail(form: HTMLFormElement)
  {
      emailjs.sendForm("service_wx1v6nx","template_q7ixw6r", form, {
          publicKey: "Jd0izlLxFMGIXA9Ky",
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', (error as EmailJSResponseStatus).text);
          },
        );
    }
}
