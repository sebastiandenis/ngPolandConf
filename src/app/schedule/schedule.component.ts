import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { BehaviorSubject } from "rxjs";
import { Label } from "ui/label";
import { Page } from "ui/page";

@Component({
  selector: "Schedule",
  moduleId: module.id,
  templateUrl: "./schedule.component.html",
  styleUrls: ["./schedule.component.css"]
})
export class ScheduleComponent implements OnInit {


  constructor(private page: Page) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  onSelectedIndexChanged($event): void {
    const actionBarText = <Label>this.page.getViewById("abScheduleText");
    $event.newIndex === 0
      ? (actionBarText.text = "Schedule - ngPoland")
      : (actionBarText.text = "Schedule - jsPoland");
  }
}
