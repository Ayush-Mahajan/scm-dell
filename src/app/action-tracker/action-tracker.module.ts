import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionTrackerRoutingModule } from './action-tracker-routing.module';
import { ActionTrackerComponent } from './action-tracker/action-tracker.component';


@NgModule({
  declarations: [ActionTrackerComponent],
  imports: [
    CommonModule,
    ActionTrackerRoutingModule
  ]
})
export class ActionTrackerModule { }
