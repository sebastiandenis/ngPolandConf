import { Component, OnDestroy, OnInit, ChangeDetectorRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { DeviceService } from "~/app/services/device.service";
import { Subject, Observable } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { AppStateFacadeService } from "~/app/services/app-state-facade.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
    isLandscape = false;
    destroySubject$ = new Subject<void>();
    confId$: Observable<string>;

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
        this.confId$ = this.appStateFacade.getConfId();
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onNavItemTap(navItemRoute: string, sl: any): void {
        this.routerExtensions.navigate([navItemRoute], {
            clearHistory: navItemRoute === "/home" ? true : false,
            transition: {
                name: "fade"
            }
        });
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }

    ngOnDestroy(): void {
        this.destroySubject$.next();
    }
}
