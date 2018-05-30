import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, transition, group, animate, state } from '@angular/animations';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class OrderComponent implements OnInit {
  @Input('data') pictureData: any;
  constructor() { }

  ngOnInit() {
    // console.log("=== input data ===>", this.pictureData);
  }

}
