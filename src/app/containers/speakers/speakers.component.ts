import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { AppStateFacadeService } from "../../services/app-state-facade.service";
import { Observable } from "rxjs";

@Component({
    selector: "Speakers",
    moduleId: module.id,
    templateUrl: "./speakers.component.html"
})
export class SpeakersComponent implements OnInit {
   
    constructor(private appStateFacade: AppStateFacadeService) {
    }

    ngOnInit(): void {}

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
   
}
