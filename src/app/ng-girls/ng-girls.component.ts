import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Observable } from "rxjs";
import { SimpleContent } from "../models/simple-content.model";
import { AppStateFacadeService } from "../services/app-state-facade.service";

@Component({
    selector: "NgGirls",
    moduleId: module.id,
    templateUrl: "./ng-girls.component.html"
})
export class NgGirlsComponent implements OnInit {

    content$: Observable<SimpleContent>;

    constructor(private appStateFacade: AppStateFacadeService) {
    }

    ngOnInit(): void {
        this.content$ = this.appStateFacade.getNgGirls();
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
