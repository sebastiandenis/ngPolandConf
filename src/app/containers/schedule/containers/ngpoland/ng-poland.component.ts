import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { EventItem } from "../../../../models/event-item.model";
import { AppStateFacadeService } from "../../../../services/app-state-facade.service";
import { delay, takeUntil } from "rxjs/operators";
import { IConference } from "~/app/models/conference.model";

@Component({
    selector: "NgPoland",
    moduleId: module.id,
    templateUrl: "./ng-poland.component.html",
    styleUrls: ["./ng-poland.component.css"]
})
export class NgPolandComponent implements OnInit, OnDestroy {
    events$: Observable<Array<EventItem>>;
    isLoading$: Observable<boolean>;
    destroySubject$ = new Subject<void>();
    conference: IConference;
    themeApplied = false;

    constructor(private appStateFacade: AppStateFacadeService) {
        // Use the component constructor to inject providers.
        this.isLoading$ = this.appStateFacade.getIsLoading();
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.events$ = this.appStateFacade.getEventsNgPoland().pipe(delay(400));

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

    refreshData(arg: any) {
        this.appStateFacade.initStateFromTheInternet();
    }

    ngOnDestroy(): void {
        this.destroySubject$.next();
    }
}
