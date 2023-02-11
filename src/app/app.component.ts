// app.component.ts
// One of the four main files that are created

// This is your main file which will contain the class with any properties,
// methods. It will also contain any specifications for the file including
// the template, stylesheet, etc.

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'takehome-hbs-d3';
}
