import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';

import { HomeComponent } from './home/home.component';

@Component({
    selector: 'my-app',
    templateUrl: './app/components/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    { path: '/home', component: HomeComponent }
])
export class AppComponent implements OnInit {
    constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/home']);
  }
}