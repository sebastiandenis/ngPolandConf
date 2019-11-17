import {
    Component,
    OnInit,
    OnDestroy,
    ViewContainerRef,
    ViewChild,
    AfterViewInit,
    ChangeDetectorRef
} from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { filter, takeUntil } from "rxjs/operators";
import { AppStateFacadeService } from "./services/app-state-facade.service";
import { SecureStorage } from "nativescript-secure-storage";

import { Observable, Subject } from "rxjs";

import { EventData } from "tns-core-modules/ui/page/page";
import { Switch } from "tns-core-modules/ui/switch";
import {
    ModalDialogOptions,
    ModalDialogService
} from "nativescript-angular/modal-dialog";
import { SwitchYearComponent } from "./shared/components/switch-year/switch-year.component";
import { IConference } from "./models/conference.model";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ThemeSplashScreenComponent } from "./shared/components/theme-splash-screen/theme-splash-screen.component";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit, OnDestroy {
    @ViewChild(RadSideDrawerComponent, { static: false })
    sideDrawerComponent: RadSideDrawerComponent;
    themeApplied$: Observable<boolean>;
    confId$: Observable<string>;
    conference: IConference;
    themeApplied = false;

    private secureStorage: SecureStorage;
    private _activatedUrl: string;
    private destroySubject$ = new Subject<void>();

    constructor(
        private router: Router,
        private routerExtensions: RouterExtensions,
        private appStateFacade: AppStateFacadeService,
        private modalService: ModalDialogService,
        private viewContainerRef: ViewContainerRef,
        private changeDetectionRef: ChangeDetectorRef
    ) {
        this.secureStorage = new SecureStorage();
    }

    ngOnInit(): void {
        //this.secureStorage.clearAllOnFirstRun().then((success: boolean) => {});
        this.appStateFacade.initState();
        this._activatedUrl = "/home";
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
                this.appStateFacade.saveAppState();
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
        if (!sw.checked) {
            this.appStateFacade.updateThemeApplied(sw.checked);
            this.changeDetectionRef.markForCheck();
        }
    }

    onThemeSwitchTap(sw: Switch) {
        // switch with before change state
        if (!sw.checked) {
            this.openThemeSplashScreenModal();
            setTimeout(() => {
                this.appStateFacade.updateThemeApplied(sw.checked);
            }, 300);
        }
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

    private openThemeSplashScreenModal() {
        const options: ModalDialogOptions = {
            viewContainerRef: this.viewContainerRef,
            fullscreen: true,
            animated: false
        };
        this.modalService.showModal(ThemeSplashScreenComponent, options);
    }
}
