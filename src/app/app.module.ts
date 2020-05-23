import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {undiasinproblemas} from './undiasinproblemas/undia.sinproblemas';
import { biblioteca } from './biblioteca/biblioteca.component';

import { from } from 'rxjs';

@NgModule({
  imports: [ BrowserModule],
  declarations: [ AppComponent, HelloComponent ,undiasinproblemas, biblioteca],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
