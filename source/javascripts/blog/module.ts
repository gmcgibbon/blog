import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BlogComponent }  from './component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    BlogComponent
  ],
  bootstrap: [
    BlogComponent
  ]
})
export class BlogModule { }
