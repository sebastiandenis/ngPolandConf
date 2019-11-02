import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { EventItem } from "~/app/models/event-item.model";
import { ContentfulService, EventItemType } from "~/app/services/contentful.service";
import { AppStateFacadeService } from "~/app/services/app-state-facade.service";

@Component({
  selector: "NgPoland",
  moduleId: module.id,
  templateUrl: "./ng-poland.component.html",
  styleUrls: ["./ng-poland.component.css"]
})
export class NgPolandComponent implements OnInit {

  events$: Observable<Array<EventItem>>;

  constructor(private appStateFacade: AppStateFacadeService) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
    this.events$ = this.appStateFacade.getEventsNgPoland();
    
  }

}
