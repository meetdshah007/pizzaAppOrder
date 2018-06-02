import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  pizzas = [];
  pizzaSub: any;

  constructor(
    private http: HttpService,
    private orderService: OrderService
  ) { }

  /**
   * On Init lifecycle hook to make the API requests.
   */
  ngOnInit() {
    this.pizzas = []; //Clear out the Object.
    if (this.pizzaSub) { //Clear any remaining requests.
      this.pizzaSub.unsubscribe();
    }
    this.pizzaSub = this.http.get('server/pizzas.json').subscribe((resp: any) => {
      //initially pizza qty will be 0.
      resp.map(pizza => {
        pizza.qty = 0;
        return pizza;
      });
      this.pizzas = resp || [];
    });
  }

  /**
   * On destroy lifecycle hook.
   * Clear any requests is pending.
   */
  ngOnDestroy() {
    if (this.pizzaSub) {
      this.pizzaSub.unsubscribe();
    }
  }

  /**
   * Add Piza to Order event Subscriber. 
   */
  addPizzaToOrder(pizza: any) {
    this.orderService.addOrder(pizza);
  }
}
