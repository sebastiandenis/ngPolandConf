import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Observable } from "rxjs";
import { Workshop } from "~/app/models/workshop.model";
import { ContentfulService } from "~/app/services/contentful.service";
import { AppStateFacadeService } from "../../services/app-state-facade.service";

@Component({
  selector: "Workshops",
  moduleId: module.id,
  templateUrl: "./workshops.component.html",
  styleUrls: ["./workshops.component.css"]
})
export class WorkshopsComponent implements OnInit {
  workshops$: Observable<Array<Workshop>>;
  isLoading$: Observable<boolean>;

  constructor(private appStateFacade: AppStateFacadeService) {
    this.isLoading$ = this.appStateFacade.getIsLoading();
  }

  ngOnInit(): void {
    // Init your component properties here.
    this.workshops$ = this.appStateFacade.getWorkshops();
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  refreshData(arg: any) {
    this.appStateFacade.initState();
}
}
