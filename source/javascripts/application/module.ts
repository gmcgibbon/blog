import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { RouterModule }         from '@angular/router';
import { ROUTES }               from './routes';
import { ApplicationComponent } from './component';
import { BlogModule }           from '../blog/module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BlogModule
  ],
  declarations: [
    ApplicationComponent
  ],
  bootstrap: [
    ApplicationComponent
  ]
})
export class ApplicationModule { }