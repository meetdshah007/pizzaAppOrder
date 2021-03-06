import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, style, transition, group, animate, state } from '@angular/animations';
import { MatSnackBar } from '@angular/material';

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
  @Input('data') pizzaDetails: any;
  @Output() addToOrder = new EventEmitter<any>(); 
  constructor(
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    // console.log("=== input data ===>", this.pictureData);
  }

  openSnackbar(){
    this.addToOrder.emit(this.pizzaDetails);
    this.snackBar.open("Item Added Successfully.", null, {
      duration: 2000
    });
  }

}
