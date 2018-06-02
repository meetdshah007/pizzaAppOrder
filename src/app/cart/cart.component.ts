import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, style, transition, group, animate, state } from '@angular/animations';
import { OrderService } from '../order.service';
import { MatSnackBar } from '@angular/material';
import { MDBModalRef } from 'angular-bootstrap-md';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class CartComponent implements OnInit {
  orders: any[] = [];
  tax: number = 10;
  subTotal: number = 0;
  grandTotal: number = 0;
  validDiscountCode: any;
  discountApplied: any = 0;
  discountCode: string = '';

  @ViewChild('discount') discountEl: MDBModalRef;
  @ViewChild('orderComplete') orderCompleteEl: any;

  constructor(
    private router: Router,
    private http: HttpService,
    private orderService: OrderService,
    public snackBar: MatSnackBar
  ) { }

  /**
   * ngOnInit Lifecycle hook to load all the orders from service.
   */
  ngOnInit() {
    this.orders = this.orderService.getCartOrders() || [];
    this.calcTotal();
  }

  /**
   * Qty Addition Helper method.
   * @param order Order Object.
   */
  addQty(order: any) {
    // order.qty++;
    this.orderService.addOrder(order);
    this.calcTotal();
  }

  /**
   * Qty reducer helper method.
   * @param order Order Object.
   */
  removeQty(order: any) {
    this.orderService.removeOrder(order);
    this.calcTotal();
  }

  /**
   * Total calculator helper method.
   * Count all subtotal, Taxes, Discount.
   */
  calcTotal() {
    this.subTotal = 0;
    let discountPercent = this.validDiscountCode ? this.validDiscountCode.value : 0;
    this.orders.map(order => {
      this.subTotal += (order.price * order.qty);
      return order;
    });
    const tax = Number((this.subTotal * this.tax / 100).toFixed(2)),
      discountValue = (discountPercent / 100) * (this.subTotal + tax);
    this.discountApplied = Number(discountValue.toFixed(2));
    this.grandTotal = this.subTotal + tax - this.discountApplied;
  }

  /**
   * Discount code check helper method.
   */
  applyDiscount() {
    let msg = "Code is invalid or Not applicable try with different code.";
    this.discountEl.hide();
    const discount = this.orderService.discountList.find(disc => disc.type.toLowerCase() === this.discountCode.toLowerCase());
    if (discount) {
      this.validDiscountCode = discount;
      this.calcTotal();
      msg = `Congratulations code is applied Successfully. You'll receive ${discount.value}% discount.`;
    } else {
      this.discountCode = '';
    }
    this.snackBar.open(msg, null, {
      duration: 3000
    });
  }

  /**
   * Order placed event handler to update the server.
   */
  placeOrder() {
    this.orderCompleteEl.show();
    this.http.get('server/order.json').subscribe(resp => {
      this.orders = [];
      this.orderService.orderPlaced();
    });
  }
  
  /**
   * Success Modal is hidden. safe to navigate.
   */
  onHidden() {
    this.router.navigateByUrl('');
  }
}
