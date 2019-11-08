import { Component, Input } from "@angular/core";
import * as utils from "tns-core-modules/utils/utils";
import { InfoItem, IInfoItemModel } from "../../../../models/info-item.model";

@Component({
  selector: "InfoItem",
  moduleId: module.id,
  templateUrl: "./info-item.component.html",
  styleUrls: ["./info-item.component.css"]
})
export class InfoItemComponent {
  @Input()
  item: IInfoItemModel;

  constructor() {
  }

  onLinkTap() {
    if (this.item.urlLink) {
      utils.openUrl(this.item.urlLink);
    }
  }
}
