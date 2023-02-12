import { Component, OnInit, Input, Output } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() isDailyActive: boolean = false;
  @Input() isWeeklyActive: boolean = true;
  @Input() isMonthlyActive: boolean = false;
  subscription: Subscription;


  // A constructor is a part of the component that is run upon initialization
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onDailyToggle().subscribe((value) => (this.isDailyActive = value));
    this.subscription = this.uiService.onWeeklyToggle().subscribe((value) => (this.isWeeklyActive = value));
    this.subscription = this.uiService.onMonthlyToggle().subscribe((value) => (this.isMonthlyActive = value));
  }

  // Life-Cycle Method
  // This is what you want your component to run upon initialization
  // (This can contain your HTTP requests, etc.)
  ngOnInit(): void {

  }

  onDailyClick() {
    this.uiService.toggleDailyActive();
    if (this.isWeeklyActive === true) {
      this.uiService.toggleWeeklyActive();
    }
    if (this.isMonthlyActive === true) {
      this.uiService.toggleMonthlyActive();
    }
  }

  onWeeklyClick() {
    if (this.isDailyActive === true) {
      this.uiService.toggleDailyActive();
    }
    this.uiService.toggleWeeklyActive();
    if (this.isMonthlyActive === true) {
      this.uiService.toggleMonthlyActive();
    }
  }

  onMonthlyClick() {
    if (this.isDailyActive === true) {
      this.uiService.toggleDailyActive();
    }
    if (this.isWeeklyActive === true) {
      this.uiService.toggleWeeklyActive();
    }
    this.uiService.toggleMonthlyActive();
  }

}
