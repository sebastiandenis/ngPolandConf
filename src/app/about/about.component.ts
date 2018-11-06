import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as utils from "tns-core-modules/utils/utils";

@Component({
    selector: "About",
    moduleId: module.id,
    templateUrl: "./about.component.html",
    styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onGitHubLinkTap(): void {
        utils.openUrl("https://github.com/sebastiandenis/NS-Event-App");
    }

    showSebekDetails(): void {
        utils.openUrl("https://twitter.com/SebekD");
    }

    showDarekDetails(): void {
        utils.openUrl("https://www.linkedin.com/in/ngkalbarczyk/");
    }
}
