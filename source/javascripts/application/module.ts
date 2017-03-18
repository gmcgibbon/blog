import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { RouterModule }         from '@angular/router';
import { ROUTES }               from './routes';
import { ApplicationComponent } from './component';
import { BlogModule }           from '../blog/module';

@NgModule({
  imports: [
    BrowserModule,
    BlogModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    ApplicationComponent
  ],
  bootstrap: [
    ApplicationComponent
  ]
})
export class ApplicationModule { }
