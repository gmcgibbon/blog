import { NgModule }          from '@angular/core';
import { CommonModule }      from '@angular/common';
import { HttpModule }        from '@angular/http';
import { RouterModule }      from '@angular/router';
import { AuthorService }     from './service';
import { AuthorGetResolver } from './get_resolver';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule
  ],
  providers: [
    AuthorService,
    AuthorGetResolver
  ],
  declarations: [ ]
})
export class AuthorModule { }
