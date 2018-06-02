import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders: any[] = [];
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
