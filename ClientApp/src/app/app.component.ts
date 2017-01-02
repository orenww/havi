import {Component, style} from '@angular/core';


@Component({
  selector: 'app-root',
  template: `<div class="container">
      <div class="col-lg-10 col-offset-1 centered">
      <ul class="nav nav-pills" role="tablist">
        <li role="presentation"><a routerLink="">HOME</a></li>
        <li role="presentation"><a routerLink="newsfeed">NEWS FEED</a></li>
        <li role="presentation"><a routerLink="activepage/:id">ACTIVE PAGE</a></li>
        <li role="presentation">  <a routerLink="filterpage">FILTER</a></li>
      </ul>
     <router-outlet></router-outlet>
     </div>
     </div>
   `
  //  ,

  // styleUrls: ['../styles.css']
})

export class AppComponent {

  name = 'Angular';
}


// import { Component } from '@angular/core';
//
// export class Statue {
//   id: number;
//   name: string;
//   year: string;
// }
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
//
// export class AppComponent {
//   title = 'Havi Weinstein';
//
//   subTitle = 'Sculpture';
//
//   //title = 'Tour of Heroes';
//   //hero = 'Windstorm';
// }
