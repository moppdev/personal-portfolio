import { Component, Input, OnInit } from '@angular/core';
import { Certification, Education } from '../../model/education.model';

@Component({
  selector: 'card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  @Input() info?: Education | Certification;
  type: string = "";

  ngOnInit()
  {
    console.log(this.info);
      if (this.info instanceof Education)
      {
        console.log("Education");
      }
      // else if (this.info instanceof Certification)
      // {
      //   console.log("Certification");
      // }
      // else
      // {
      //   throw new Error("Invalid information given");
      // }
  }

}
