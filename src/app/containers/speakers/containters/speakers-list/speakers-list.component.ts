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

    constructor(private appStateFacade: AppStateFacadeService) {}

    ngOnInit(): void {
        this.speakers$ = this.appStateFacade.getSpeakers();
    }
}
