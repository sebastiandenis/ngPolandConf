import { Component, OnInit, OnDestroy } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Observable, Subject } from "rxjs";
import { Workshop } from "../../models/workshop.model";
import { AppStateFacadeService } from "../../services/app-state-facade.service";
import { IConference } from "../../models/conference.model";
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: "Workshops",
    moduleId: module.id,
    templateUrl: "./workshops.component.html",
    styleUrls: ["./workshops.component.css"]
})
export class WorkshopsComponent implements OnInit, OnDestroy {
    workshops$: Observable<Array<Workshop>>;
    isLoading$: Observable<boolean>;
    conference: IConference;
    themeApplied = false;
    private destroySubject$ = new Subject<void>();

    constructor(private appStateFacade: AppStateFacadeService) {
        this.isLoading$ = this.appStateFacade.getIsLoading();
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.workshops$ = this.appStateFacade.getWorkshops();
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

    refreshData(arg: any) {
        this.appStateFacade.initStateFromTheInternet();
    }

    ngOnDestroy() {
      this.destroySubject$.next();
  }
}
