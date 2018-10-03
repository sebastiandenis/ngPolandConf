import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { EventItem } from "~/app/models/event-item.model";
import { ContentfulService, EventItemType } from "~/app/services/contentful.service";

@Component({
    selector: "JsPoland",
    moduleId: module.id,
    templateUrl: "./js-poland.component.html",
    styleUrls: ["./js-poland.component.css"]
})
export class JsPolandComponent implements OnInit {

    events$: Observable<Array<EventItem>>;

    constructor(private contentful: ContentfulService) {
      // Use the component constructor to inject providers.
    }
  
    ngOnInit(): void {
      // Init your component properties here.
      this.events$ = this.contentful.getEventItems(100, EventItemType.JSPOLAND);
    }
}
