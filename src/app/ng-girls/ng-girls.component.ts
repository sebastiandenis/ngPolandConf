import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Observable } from "rxjs";
import { SimpleContent } from "../models/simple-content.model";
import { ContentfulService } from "../services/contentful.service";

@Component({
    selector: "NgGirls",
    moduleId: module.id,
    templateUrl: "./ng-girls.component.html"
})
export class NgGirlsComponent implements OnInit {

    content$: Observable<SimpleContent>;

    constructor(private contentful: ContentfulService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.content$ = this.contentful.getSimpleContentById("ng-girls-workshops");
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
