import { Component, OnInit, Input } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Speaker } from "~/app/models/speaker.model";
import { AppStateFacadeService } from "~/app/services/app-state-facade.service";
import { delay } from "rxjs/operators";
import { IConference } from "../../../../models/conference.model";

@Component({
    selector: "SpeakersList",
    moduleId: module.id,
    templateUrl: "./speakers-list.component.html",
    styleUrls: ["./speakers-list.component.css"]
})
export class SpeakersListComponent implements OnInit {
    speakers$: Observable<Array<Speaker>>;
    isLoading$: Observable<boolean>;


    constructor(private appStateFacade: AppStateFacadeService) {
        this.isLoading$ = this.appStateFacade.getIsLoading();
    }

    ngOnInit(): void {
        this.speakers$ = this.appStateFacade.getSpeakers().pipe(delay(400));
    }
    refreshData(arg: any) {
        this.appStateFacade.initState();
    }
}
