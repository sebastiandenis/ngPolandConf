import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { EventItem } from "../../../../models/event-item.model";
import { AppStateFacadeService } from "../../../../services/app-state-facade.service";
import { delay } from "rxjs/operators";

@Component({
    selector: "NgPoland",
    moduleId: module.id,
    templateUrl: "./ng-poland.component.html",
    styleUrls: ["./ng-poland.component.css"]
})
export class NgPolandComponent implements OnInit {
    events$: Observable<Array<EventItem>>;
    isLoading$: Observable<boolean>;

    constructor(private appStateFacade: AppStateFacadeService) {
        // Use the component constructor to inject providers.
        this.isLoading$ = this.appStateFacade.getIsLoading();
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.events$ = this.appStateFacade.getEventsNgPoland().pipe(delay(400));
    }

    refreshData(arg: any) {
        this.appStateFacade.initState();
    }
}
