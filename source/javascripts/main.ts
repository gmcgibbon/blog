import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode }         from '@angular/core';

if (process.env.NODE_ENV == 'build') { enableProdMode(); }

document.addEventListener('DOMContentLoaded', () =>
  platformBrowserDynamic().bootstrapModule(null)
);
