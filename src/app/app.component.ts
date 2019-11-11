import { Component, OnInit, OnDestroy, ViewContainerRef } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import {
    DrawerTransitionBase,
    RadSideDrawer,
    SlideInOnTopTransition
} from "nativescript-ui-sidedrawer";
import { filter, takeUntil } from "rxjs/operators";
import { AppStateFacadeService } from "./services/app-state-facade.service";
import { SecureStorage } from "nativescript-secure-storage";
import { SettingsService } from "./services/settings.service";
import { Observable, Subject } from "rxjs";
import { DeviceService } from "./services/device.service";
import * as app from "tns-core-modules/application";
import { EventData } from "tns-core-modules/ui/page/page";
import { Switch } from "tns-core-modules/ui/switch";
import * as dialogs from "tns-core-modules/ui/dialogs";
import {
    ModalDialogOptions,
    ModalDialogService
} from "nativescript-angular/modal-dialog";
import { SwitchYearComponent } from './shared/components/switch-year/switch-year.component';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit, OnDestroy {
    themeApplied$: Observable<boolean>;
    confId$: Observable<string>;
    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }
    private secureStorage: SecureStorage;
    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;
    private destroySubject$ = new Subject<void>();

    constructor(
        private router: Router,
        private routerExtensions: RouterExtensions,
        private appStateFacade: AppStateFacadeService,
        private settingService: SettingsService,
        private deviceService: DeviceService,
        private modalService: ModalDialogService,
        private viewContainerRef: ViewContainerRef
    ) {
        this.secureStorage = new SecureStorage();
    }
    ngOnInit(): void {
        this.secureStorage.clearAllOnFirstRun().then((success: boolean) => {});
        this.appStateFacade.initState();
        this._activatedUrl = "/home";
        this._sideDrawerTransition = new SlideInOnTopTransition();
        this.themeApplied$ = this.appStateFacade.getThemeApplied();
        this.confId$ = this.appStateFacade.getConfId();


        this.router.events
            .pipe(
                takeUntil(this.destroySubject$),
                filter((event: any) => event instanceof NavigationEnd)
            )
            .subscribe((event: NavigationEnd) => {
                return (this._activatedUrl = event.urlAfterRedirects);
            });
    }

    isComponentSelected(url: string): boolean {
        return this._activatedUrl === url;
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            clearHistory: navItemRoute === "/home" ? true : false
        });

        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }

    onCheckedChange(event: EventData) {
        const sw = event.object as Switch;
        this.appStateFacade.updateThemeApplied(sw.checked);
    }

    onChangeYear() {
        this.openSwitchYearModal();
    }

    

    ngOnDestroy() {
        this.destroySubject$.next();
    }

    private openSwitchYearModal() {
        const options: ModalDialogOptions = {
            viewContainerRef: this.viewContainerRef,
            fullscreen: false,
            animated: true
        };
        this.modalService.showModal(SwitchYearComponent, options);
    }
}
