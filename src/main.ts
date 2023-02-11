// This file is your "entry point" to Angular
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// This is your main "module" (Angular concept) which is getting "bootstrapped" to your browser
// You can find the specific module getting "bootstrapped" along this file path: ./app/app.module.ts
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
