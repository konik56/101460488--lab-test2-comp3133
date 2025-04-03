import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // Import provideHttpClient

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Use provideHttpClient to provide HttpClient
  ],
}).catch((err) => console.error(err));
