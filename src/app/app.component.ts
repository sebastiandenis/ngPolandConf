import { Component, OnInit, OnDestroy } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import {
    DrawerTransitionBase,
    RadSideDrawer,
    SlideInOnTopTransition
} from "nativescript-ui-sidedrawer";
import { filter } from "rxjs/operators";
import * as app from "tns-core-modules/application";
import { AppStateFacadeService } from "./services/app-state-facade.service";
import { SecureStorage } from "nativescript-secure-storage";
import { SettingsService } from "./services/settings.service";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    private secureStorage: SecureStorage;
    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }
    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(
        private router: Router,
        private routerExtensions: RouterExtensions,
        private appStateFacade: AppStateFacadeService,
        private settingService: SettingsService
    ) {
        this.secureStorage = new SecureStorage();
    }

    ngOnInit(): void {
        this.secureStorage.clearAllOnFirstRun().then((success: boolean) => {
            console.log(
                success
                    ? "Successfully removed all data on the first run"
                    : "Data not removed because this is not the first run"
            );
        });
        this.appStateFacade.initState();
        this._activatedUrl = "/home";
        this._sideDrawerTransition = new SlideInOnTopTransition();

        this.router.events
            .pipe(filter((event: any) => event instanceof NavigationEnd))
            .subscribe(
                (event: NavigationEnd) =>
                    (this._activatedUrl = event.urlAfterRedirects)
            );
    }

    isComponentSelected(url: string): boolean {
        return this._activatedUrl === url;
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute]);

        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }
}
