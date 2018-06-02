import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders: any[] = [];
  discountList: any[] = [{
    type: 'SAVE10',
    value: 10
  }, {
    type: 'SAVE20',
    value: 20
  }];
  ordersSource = new BehaviorSubject(this.orders.length);
  public orderMsg = this.ordersSource.asObservable();
  constructor() { }

  /**
   * Add ORder handler to maintain orders list and intimate all subscribers to update order.
   * @param pizza Object that contains the Pizza details.
   */
  addOrder(pizza: any) {
    let foundExistingOrder = this.orders.find(piz => piz.id == pizza.id);
    if (foundExistingOrder) {
      foundExistingOrder.qty++;
    } else {
      pizza.qty++;
      this.orders.push(pizza)
    }
    this.updateOrder();
  }

  /**
   * 
   */
  removeOrder(pizza: any) {
    if (pizza.qty === 1) {
      const index = this.orders.findIndex(ord => ord.id === pizza.id);
      if (index != -1) {
        this.orders.splice(index, 1);
      }
    } else {
      pizza.qty--;
    }
    this.updateOrder();
  }

  /**
   * Update Order Intimator.
   */
  updateOrder() {
    this.ordersSource.next(this.orders.length);
  }

  /**
   * Helper method that returns the All Cart orders.
   */
  getCartOrders() {
    return this.orders;
  }
}
