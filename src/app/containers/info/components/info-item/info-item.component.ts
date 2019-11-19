import { Component, Input, OnInit } from "@angular/core";
import * as utils from "@nativescript/core/utils/utils";
import { IInfoItemModel } from "../../../../models/info-item.model";

@Component({
    selector: "InfoItem",
    moduleId: module.id,
    templateUrl: "./info-item.component.html"
})
export class InfoItemComponent implements OnInit {
    @Input()
    item: IInfoItemModel;

    constructor() {}

    ngOnInit() {}

    onLinkTap() {
        if (this.item.urlLink) {
            utils.openUrl(this.item.urlLink);
        }
    }
}
