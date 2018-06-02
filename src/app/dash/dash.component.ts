import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {

  pizzaMaster: any[] = [];
  pizzas: any[] = [];
  vegFilter: any[] = [];
  pizzaSub: any;
  isVegFiltered: boolean = false;

  constructor(
    private http: HttpService,
    private orderService: OrderService
  ) { }

  /**
   * On Init lifecycle hook to make the API requests.
   */
  ngOnInit() {
    this.pizzaMaster = [];
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
      this.pizzaMaster = [].concat(resp);
      this.pizzas = resp || [];
    });

    this.http.searchStr.subscribe(val => this.filterData(val));
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

  /**
   * Filter based on Search.
   * @param val String Value to search.
   */
  filterData(val: string) {
    this.pizzas = this.pizzaMaster.filter(pizza => (String(pizza.name).toLowerCase().indexOf(String(val).toLowerCase()) !== -1));
    if(this.isVegFiltered) {
      this.filterToType({checked: this.isVegFiltered});
    }
  }

  /**
   * Filter data based on appearance to type.
   * @param event Newly updated data.
   */
  filterToType(event: any) {
    if (event.checked) {
      this.vegFilter = [].concat(this.pizzas);
      this.isVegFiltered = true;
      this.pizzas = this.pizzas.filter(pizza => pizza.isVeg === !event.checked);
    } else {
      this.isVegFiltered = false;
      this.pizzas = this.vegFilter.filter(pizza => true);
      this.vegFilter = [];
    }
  }
}
