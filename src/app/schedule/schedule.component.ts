import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { isAndroid } from "platform";
import { Page } from "ui/page";
import { Color } from "color";

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

  
}
