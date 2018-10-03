import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Workshop } from "~/app/models/workshop.model";
import { ContentfulService } from "~/app/services/contentful.service";

@Component({
    selector: "Workshops",
    moduleId: module.id,
    templateUrl: "./workshops.component.html",
    styleUrls: ["./workshops.component.css"]
})
export class WorkshopsComponent implements OnInit {

    workshops$: Observable<Array<Workshop>>;

  

    constructor(private contentful: ContentfulService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.workshops$ = this.contentful.getWorkshops(100);
    }
   
}
