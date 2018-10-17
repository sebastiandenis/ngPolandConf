import { Component, Input, OnInit } from "@angular/core";
import { Workshop } from "~/app/models/workshop.model";

@Component({
  selector: "Workshop",
  moduleId: module.id,
  templateUrl: "./workshop.component.html",
  styleUrls: ["./workshop.component.css"]
})
export class WorkshopComponent implements OnInit {
  @Input()
  workshop: Workshop;

  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {}
}
