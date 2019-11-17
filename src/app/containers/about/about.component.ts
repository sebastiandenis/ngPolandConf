import { Component, OnInit, OnDestroy } from "@angular/core";
import * as app from "tns-core-modules/application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as utils from "tns-core-modules/utils/utils";
import { Subject } from "rxjs";
import { IConference } from "../../models/conference.model";
import { AppStateFacadeService } from "../../services/app-state-facade.service";
import { takeUntil } from "rxjs/operators";

@Component({
    selector: "About",
    moduleId: module.id,
    templateUrl: "./about.component.html",
    styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit, OnDestroy {
    destroySubject$ = new Subject<void>();
    conference: IConference;
    themeApplied = false;

    constructor(private appStateFacade: AppStateFacadeService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.appStateFacade
            .getCurrentConference()
            .pipe(takeUntil(this.destroySubject$))
            .subscribe((conf: IConference) => {
                this.conference = conf;
            });
        this.appStateFacade
            .getThemeApplied()
            .pipe(takeUntil(this.destroySubject$))
            .subscribe((isThemeApplied: boolean) => {
                this.themeApplied = isThemeApplied;
            });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onGitHubLinkTap(): void {
        utils.openUrl("https://github.com/sebastiandenis/ngPolandConf");
    }

    showSebekDetails(): void {
        utils.openUrl("https://twitter.com/SebekD");
    }

    showDarekDetails(): void {
        utils.openUrl("https://www.linkedin.com/in/ngkalbarczyk/");
    }

    ngOnDestroy(): void {
        this.destroySubject$.next();
    }
}
