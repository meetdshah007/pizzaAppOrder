import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  badgeVisible: boolean = false;
  allowSearch: boolean = true;
  constructor(
    private router: Router,
    http: HttpService
  ) {
    router.events.subscribe((url: RouterEvent) => {
      if (this.router.isActive('cart', false)) {
        this.allowSearch = false;
      } else {
        this.allowSearch = true;
      }
    });
  }

  ngOnInit() {
  }

}
