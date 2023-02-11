// This file is your main module getting "bootstrapped" onto the web page

// `NgModule` is being pulled in from the Angular "core"
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

// NOTE: The importing & setup of components is done automatically in this file
// when using the Angular CLI
// When we import a new component (like `AppComponent` below)...
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PrioritiesComponent } from './components/priorities/priorities.component';

// From the `NgModule` we're bringing in four categories, of sorts
@NgModule({

  // ...that `AppComponent` (Line 10) is put in "declarations"
  declarations: [
    AppComponent,
    ProfileComponent,
    PrioritiesComponent
  ],

  // Whenever you use a module, it should be included in "imports"
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  // Any global services (providers) that you are using should be included in
  // "providers"
  providers: [],

  // Whatever components you will be "bootstrapping" into the browser should be
  // included in "bootstrap", i.e. the file component referenced on Line 10
  bootstrap: [AppComponent]
})
export class AppModule { }
