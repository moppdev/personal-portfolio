import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() {

  }

  // Sends the email
  async sendMail(params: {"name": string, "email": string, "message": string}): Promise<boolean>
  {
      await emailjs.send("service_oa9n0ia","template_q7ixw6r", params, {
          publicKey: "Jd0izlLxFMGIXA9Ky",
        })
        .then(
          () => {
            console.log('SUCCESS!');
            return true;
          },
          (error) => {
            console.log('FAILED...', (error as EmailJSResponseStatus).text);
            return false;
          },
        );

        return false;
    }
}
