import { bootstrap } from '@angular/platform-browser-dynamic';
import { bind, enableProdMode } from '@angular/core';
import { FORM_PROVIDERS, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './components/app.component'

//enableProdMode(); //Uncomment for production

bootstrap(AppComponent, [ 
    FORM_PROVIDERS, 
    ROUTER_PROVIDERS, 
    HTTP_PROVIDERS, 
    //Optional: bind(LocationStrategy).toClass(HashLocationStrategy)
]).then(
    success => console.log('AppComponent bootstrapped!'),
    error => console.log(error)
);