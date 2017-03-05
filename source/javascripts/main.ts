import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode }         from '@angular/core';
import { BlogModule }              from './blog/module';

if (process.env.NODE_ENV == 'build') { enableProdMode(); }

document.addEventListener('DOMContentLoaded', () =>
  platformBrowserDynamic().bootstrapModule(BlogModule)
);
