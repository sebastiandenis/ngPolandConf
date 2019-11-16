import { Component, OnInit, OnDestroy } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { AppStateFacadeService } from "../../services/app-state-facade.service";
import { Observable, Subject } from "rxjs";
import { IConference } from "../../models/conference.model";
import { takeUntil } from "rxjs/operators";

@Component({
    selector: "Speakers",
    moduleId: module.id,
    templateUrl: "./speakers.component.html",
    styleUrls: ["./speakers.component.scss"]
})
export class SpeakersComponent implements OnInit, OnDestroy {
    destroySubject$ = new Subject<void>();
    conference: IConference;
    themeApplied = false;

    constructor(private appStateFacade: AppStateFacadeService) {}

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

    ngOnDestroy(): void {
        this.destroySubject$.next();
    }
}
