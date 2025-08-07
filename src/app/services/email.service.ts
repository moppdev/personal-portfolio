import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  // Service that sends the emails

  // Sends the email
  async sendMail(params: {"name": string, "email": string, "message": string})
  {
    let sent = false;
    // Use the params to make a call to email.js API
    // Public key and template key can be exposed as mentioned in docs
      await emailjs.send("service_oa9n0ia","template_q7ixw6r", params, {
          publicKey: "Jd0izlLxFMGIXA9Ky",
        })
        .then(
          () => {
            sent = true;
          },
          (error) => {
            sent = false;
            console.error(`Something went wrong when sending the email: ${error}`);
          },
        );

        return sent;
    }
}
