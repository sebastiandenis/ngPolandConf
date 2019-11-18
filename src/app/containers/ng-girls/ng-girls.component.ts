import { Component, OnInit, OnDestroy } from "@angular/core";
import * as app from "@nativescript/core/application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Observable, Subject } from "rxjs";
import { SimpleContent } from "../../models/simple-content.model";
import { AppStateFacadeService } from "../../services/app-state-facade.service";
import { IConference } from "../../models/conference.model";
import { takeUntil } from "rxjs/operators";

@Component({
    selector: "NgGirls",
    moduleId: module.id,
    templateUrl: "./ng-girls.component.html"
})
export class NgGirlsComponent implements OnInit, OnDestroy{
    content$: Observable<SimpleContent>;
    destroySubject$ = new Subject<void>();
    conference: IConference;
    themeApplied = false;

    constructor(private appStateFacade: AppStateFacadeService) {}

    ngOnInit(): void {
        this.content$ = this.appStateFacade.getNgGirls();

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
