import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode }         from '@angular/core';
import { ApplicationModule }      from './application/module';

if (process.env.NODE_ENV == 'build') { enableProdMode(); }

document.addEventListener('DOMContentLoaded', () =>
  platformBrowserDynamic().bootstrapModule(ApplicationModule)
);
