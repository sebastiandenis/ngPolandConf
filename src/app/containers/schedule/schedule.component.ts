import { Component, OnInit, OnDestroy } from "@angular/core";
import * as app from "@nativescript/core/application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

import { Label } from "@nativescript/core/ui/label";
import { Page } from "@nativescript/core/ui/page";
import { IConference } from "~/app/models/conference.model";
import { Subject } from "rxjs";
import { AppStateFacadeService } from "~/app/services/app-state-facade.service";
import { takeUntil } from "rxjs/operators";

@Component({
    selector: "Schedule",
    moduleId: module.id,
    templateUrl: "./schedule.component.html",
    styleUrls: ["./schedule.component.scss"]
})
export class ScheduleComponent implements OnInit, OnDestroy {
    conference: IConference;
    themeApplied = false;
    private destroySubject$ = new Subject<void>();

    constructor(
        private page: Page,
        private appStateFacade: AppStateFacadeService
    ) {
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

    onSelectedIndexChanged($event): void {
        const actionBarText = <Label>this.page.getViewById("abScheduleText");
        $event.newIndex === 0
            ? (actionBarText.text = "Schedule - NG Poland")
            : (actionBarText.text = "Schedule - JS Poland");
    }

    ngOnDestroy() {
        this.destroySubject$.next();
    }
}
