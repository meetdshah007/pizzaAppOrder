import { Component } from '@angular/core';

@Component({
  selector: 'dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  pictures = [];

  ngOnInit() {
    console.log("inside on init");
    let data = [{
      id: 1,
      title: 'A natural view',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg'
    },
    {
      id: 2,
      title: 'Newspaper',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/LTLE4QGRVQ.jpg'
    },
    {
      id: 3,
      title: 'Favourite pizza',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg'
    },
    {
      id: 4,
      title: 'Abstract design',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/U9PP3KXXY2.jpg'
    },
    {
      id: 5,
      title: 'Tech',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/NO9CN3QYR3.jpg'
    },
    {
      id: 6,
      title: 'Nightlife',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg'
    }],
      i = 0,
      removeMe = () => {
        setTimeout(() => {
          
          this.pictures.pop();
          
          if (0 <= this.pictures.length) {
            console.log("Again remove me", i, this.pictures);
            removeMe();
          } else {
            console.log("Now Add me", i, this.pictures);
            i = 0;
            callmeAgain();
          }
        }, 2000);
      },
      callmeAgain = () => {
        setTimeout(() => {
          this.pictures = this.pictures.concat(data[i]);
          i++;
          if (i < data.length) {
            console.log("Again Add me", i, this.pictures);           
            callmeAgain();
          } else {
            console.log("Now remove me", i, this.pictures);            
            i = 0;
            removeMe();
          }
        }, 2000);
      };
      console.log("First time i", i);
    callmeAgain();
  }
}
