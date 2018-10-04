import { Component, OnInit, Input } from "@angular/core";
import { Speaker } from "~/app/models/speaker.model";

@Component({
    selector: "Speaker",
    moduleId: module.id,
    templateUrl: "./speaker.component.html",
    styleUrls: ["./speaker.component.css"]
})
export class SpeakerComponent implements OnInit {

    @Input()
    speaker: Speaker;

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

}
