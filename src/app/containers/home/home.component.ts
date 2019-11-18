import { Component, OnDestroy, OnInit, ChangeDetectorRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "@nativescript/core/application";
import { DeviceService } from "~/app/services/device.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { AppStateFacadeService } from "~/app/services/app-state-facade.service";
import { IConference } from "../../models/conference.model";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
    isLandscape = false;
    destroySubject$ = new Subject<void>();
    conference: IConference;
    themeApplied = false;

    constructor(
        private routerExtensions: RouterExtensions,
        private deviceService: DeviceService,
        private changeDetectorRef: ChangeDetectorRef,
        private appStateFacade: AppStateFacadeService
    ) {}

    ngOnInit(): void {
        this.deviceService.isLandscape$
            .pipe(takeUntil(this.destroySubject$))
            .subscribe((isLandscape: boolean) => {
                this.isLandscape = isLandscape;
                this.changeDetectorRef.detectChanges();
            });
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

    onNavItemTap(navItemRoute: string, sl: any): void {
        this.routerExtensions.navigate([navItemRoute], {
            clearHistory: navItemRoute === "/home" ? true : false
        });
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }

    ngOnDestroy(): void {
        this.destroySubject$.next();
    }
}
