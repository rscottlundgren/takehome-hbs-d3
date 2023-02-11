// app.component.ts
// One of the four main files that are created

// This is your main file which will contain the class with any properties,
// methods. It will also contain any specifications for the file including
// the template, stylesheet, etc.

// We start by bringing in `Component` from Angular Core
import { Component } from '@angular/core';

// We then move onto the "declaration" which has three key / value pairs
@Component({

  // The "selector" is the HTML "tag" you're going to use to embed your
  // component (we can see this in the 'index.html' file where
  // <app-root></app-root> is nested within the <body></body> tags)
  selector: 'app-root',

  // All the components you create should live inside the 'templateUrl' file
  templateUrl: './app.component.html',

  // You can have more than one file that contains component styles, but all
  // of those should be listed in the 'styleUrls' array
  styleUrls: ['./app.component.css']

})

// You'll export your component class which will contain any properties that
// component may have, as well as any methods that component may need (i.e.
// custom methods, life-cycle methods, etc.)
export class AppComponent {
  title: string = 'takehome-hbs-d3';
}
