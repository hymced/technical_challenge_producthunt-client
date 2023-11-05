import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { LOCALE_ID } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';

platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [
    // {provide: LOCALE_ID, useValue: 'fr' },
    // {provide: MAT_DATE_LOCALE, useValue: 'fr'}
  ]
})
  .catch(err => console.error(err));
