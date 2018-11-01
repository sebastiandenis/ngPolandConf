import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Observable } from "rxjs";
import { InfoItem } from "../models/info-item.model";
import { ContentfulService } from "../services/contentful.service";

@Component({
  selector: "Info",
  moduleId: module.id,
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.css"]
})
export class InfoComponent implements OnInit {
  infoItems$: Observable<Array<InfoItem>>;

  constructor(private contentful: ContentfulService) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
    this.infoItems$ = this.contentful.getInfoItems(100);
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }
}
