import { Component, OnInit, Input } from "@angular/core";
import { EventItem } from "~/app/models/event-item.model";

@Component({
  selector: "EventItem",
  moduleId: module.id,
  templateUrl: "./event-item.component.html",
  styleUrls: ["./event-item.component.css"]
})
export class EventItemComponent implements OnInit {
  @Input()
  eventItem: EventItem;

  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {}
}
