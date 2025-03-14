import { Component, inject, OnInit } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  // TS for the About section of the website

  // inject the infoService to access the JSON
  infoService = inject(InfoService);

  ngOnInit() 
  {
    console.log(this.infoService.about);

    console.log(this.infoService.education);
  }

}
