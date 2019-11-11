import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Speaker, ISpeaker } from "~/app/models/speaker.model";
import { ContentfulService } from "~/app/services/contentful.service";
import { AppStateFacadeService } from "~/app/services/app-state-facade.service";

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
        this.speakers$ = this.appStateFacade.getSpeakers();
    }
    refreshData(arg: any) {
        this.appStateFacade.initState();
    }
}
