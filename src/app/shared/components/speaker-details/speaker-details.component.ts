import { Component, OnInit, OnDestroy } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Speaker } from "../../../models/speaker.model";
import * as utils from "tns-core-modules/utils/utils";
import { AppStateFacadeService } from "../../../services/app-state-facade.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { IConference } from "../../../models/conference.model";

@Component({
    selector: "SpeakerDetails",
    moduleId: module.id,
    templateUrl: "./speaker-details.component.html",
    styleUrls: ["./speaker-details.component.scss"]
})
export class SpeakerDetailsComponent implements OnInit, OnDestroy {
    speaker: Speaker;
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
        if (this.params.context.speaker) {
            this.speaker = this.params.context.speaker;
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

    openUrlLink(url: string): void {
        utils.openUrl(url);
    }

    ngOnDestroy(): void {
        this.destroySubject$.next();
    }
}
