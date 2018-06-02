import { Component } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  pizzas = [];
  pizzaSub: any;

  constructor(
    private http: HttpService
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
      this.pizzas = resp || [];
    });
  }

  /**
   * On destroy lifecycle hook.
   * Clear any requests is pending.
   */
  ngOnDestroy() {
    if(this.pizzaSub) {
      this.pizzaSub.unsubscribe();
    }
  }
}
