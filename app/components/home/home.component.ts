import { Component, OnInit } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
    templateUrl: './app/components/home/home.component.html',
    directives: [MD_CARD_DIRECTIVES]
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() {

    }

}