import { Component, OnInit, OnDestroy } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import * as utils from "@nativescript/core/utils/utils";
import { AppStateFacadeService } from "../../../services/app-state-facade.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { IConference } from "../../../models/conference.model";
import { IEventItem } from '~/app/models/event-item.model';

@Component({
    selector: "EventItemDetails",
    moduleId: module.id,
    templateUrl: "./event-item-details.component.html",
    styleUrls: ["./event-item-details.component.scss"]
})
export class EventItemDetailsComponent implements OnInit, OnDestroy {
    eventItem: IEventItem;
    destroySubject$ = new Subject<void>();
    conference: IConference;
    themeApplied = false;

    constructor(
        private params: ModalDialogParams,
        private appStateFacade: AppStateFacadeService
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        if (this.params.context.eventItem) {
            this.eventItem = this.params.context.eventItem;
        }

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

    close() {
        this.params.closeCallback();
    }


    ngOnDestroy(): void {
        this.destroySubject$.next();
    }
}
