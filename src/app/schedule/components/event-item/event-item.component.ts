import { Component, Input, OnInit } from "@angular/core";
import { EventItem } from "~/app/models/event-item.model";

@Component({
  selector: "EventItem",
  moduleId: module.id,
  templateUrl: "./event-item.component.html",
  styleUrls: ["./event-item.component.css"]
})
export class EventItemComponent {
  @Input()
  eventItem: EventItem;

  constructor() {
    // Use the component constructor to inject providers.
  }

  isNow(): boolean {
    const now = new Date();
    // console.log("Now: " + now);

    const eventStart = new Date(this.eventItem.startDate);
    const eventEnd = new Date(this.eventItem.endDate);

    if (eventStart <= now && eventEnd >= now) {
      console.log("tak to teraz!");

      return true;
    } else {
      return false;
    }
  }

}
