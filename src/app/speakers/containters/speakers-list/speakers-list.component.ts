import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Speaker } from "~/app/models/speaker.model";
import { ContentfulService } from "~/app/services/contentful.service";


@Component({
    selector: "SpeakersList",
    moduleId: module.id,
    templateUrl: "./speakers-list.component.html",
    styleUrls: ["./speakers-list.component.css"]
})
export class SpeakersListComponent implements OnInit {

    speakers$: Observable<Array<Speaker>>;

    constructor(private contentful: ContentfulService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.speakers$ = this.contentful.getSpeakers(100);
    }

}
