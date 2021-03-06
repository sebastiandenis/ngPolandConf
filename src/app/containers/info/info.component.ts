import { Component, OnInit, OnDestroy } from "@angular/core";
import * as app from "@nativescript/core/application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Observable, Subject } from "rxjs";
import { IInfoItemModel } from "../../models/info-item.model";
import { AppStateFacadeService } from "../../services/app-state-facade.service";
import { takeUntil } from "rxjs/operators";
import { IConference } from "../../models/conference.model";

@Component({
    selector: "Info",
    moduleId: module.id,
    templateUrl: "./info.component.html",
    styleUrls: ["./info.component.css"]
})
export class InfoComponent implements OnInit, OnDestroy {
    infoItems$: Observable<Array<IInfoItemModel>>;
    infoItemsSorted: Array<IInfoItemModel>;
    isLoading$: Observable<boolean>;
    conference: IConference;
    themeApplied = false;

    private destroySubject$: Subject<void> = new Subject<void>();

    constructor(private appStateFacade: AppStateFacadeService) {
        // Use the component constructor to inject providers.
        this.isLoading$ = this.appStateFacade.getIsLoading();
    }

    ngOnInit(): void {
        this.infoItems$ = this.appStateFacade.getInfo();
        this.infoItems$
            .pipe(takeUntil(this.destroySubject$))
            .subscribe((items: Array<IInfoItemModel>) => {
                this.infoItemsSorted = items.sort(
                    (itemA: IInfoItemModel, itemB: IInfoItemModel) => {
                        const a = +itemA.order;
                        const b = +itemB.order;

                        return b > a ? -1 : a > b ? 1 : 0;
                    }
                );
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

    ngOnDestroy() {
        this.destroySubject$.next();
    }

    refreshData(arg: any) {
        this.appStateFacade.initStateFromTheInternet();
    }
}
