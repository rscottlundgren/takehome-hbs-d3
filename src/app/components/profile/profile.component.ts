import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // A constructor is a part of the component that is run upon initialization
  constructor() { }

  // Life-Cycle Method
  // This is what you want your component to run upon initialization
  // (This can contain your HTTP requests, etc.)
  ngOnInit(): void {

  }

}
