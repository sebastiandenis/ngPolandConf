import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { EventItem } from "~/app/models/event-item.model";
import {
    ContentfulService,
    EventItemType
} from "~/app/services/contentful.service";
import { AppStateFacadeService } from "~/app/services/app-state-facade.service";

@Component({
    selector: "JsPoland",
    moduleId: module.id,
    templateUrl: "./js-poland.component.html",
    styleUrls: ["./js-poland.component.css"]
})
export class JsPolandComponent implements OnInit {
    events$: Observable<Array<EventItem>>;
    isLoading$: Observable<boolean>;

    constructor(private appStateFacade: AppStateFacadeService) {
        // Use the component constructor to inject providers.
        this.isLoading$ = this.appStateFacade.getIsLoading();
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.events$ = this.appStateFacade.getEventsJsPoland();
    }

    refreshData(arg: any) {
        this.appStateFacade.initState();
    }
}
