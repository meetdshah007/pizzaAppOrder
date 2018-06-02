import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, RouterEvent } from '@angular/router';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  activeOrders: number = 0;
  allowSearch: boolean = true;
  constructor(
    private router: Router,
    private http: HttpService,
    private orderService: OrderService
  ) {
    router.events.subscribe((url: RouterEvent) => {
      if (this.router.isActive('cart', false)) {
        this.allowSearch = false;
      } else {
        this.allowSearch = true;
      }
    });
  }

  /**
   * ngOnInit lifecycle hook subscribe to Orders channel.
   */
  ngOnInit() {
    this.orderService.orderMsg.subscribe(orderNums => {
      this.activeOrders = orderNums;
    });
  }

  /**
   * Helper method tracks the inputs.
   * @param event $Event triggered object.
   */
  onSearch(event: any) {
    this.http.searchPizza(event.target.value);
  }

}
