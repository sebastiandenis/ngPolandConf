import { Component, Input } from "@angular/core";
import * as utils from "tns-core-modules/utils/utils";
import { InfoItem } from "~/app/models/info-item.model";

@Component({
  selector: "InfoItem",
  moduleId: module.id,
  templateUrl: "./info-item.component.html",
  styleUrls: ["./info-item.component.css"]
})
export class InfoItemComponent {
  @Input()
  item: InfoItem;

  constructor() {
    // constructor here
  }

  onLinkTap() {
    if (this.item.urlLink) {
      utils.openUrl(this.item.urlLink);
    }
  }
}
