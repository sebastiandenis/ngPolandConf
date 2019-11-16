import { Component, Input, OnInit, ViewContainerRef } from "@angular/core";
import {
    ModalDialogOptions,
    ModalDialogService
} from "nativescript-angular/modal-dialog";
import { Speaker } from "../../../../models/speaker.model";
import { SpeakerDetailsComponent } from "../../../../shared/components/speaker-details/speaker-details.component";
import { IConference } from "../../../../models/conference.model";

@Component({
    selector: "Speaker",
    moduleId: module.id,
    templateUrl: "./speaker.component.html",
    styleUrls: ["./speaker.component.scss"]
})
export class SpeakerComponent implements OnInit {
    @Input()
    speaker: Speaker;


    constructor(
        private modalService: ModalDialogService,
        private viewContainerRef: ViewContainerRef
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    showModal(sl: any) {
        sl.className = "";
        sl.className = "highlighted";
        setTimeout(() => this.openModal(), 300);
    }

    private openModal(): void {
        const options: ModalDialogOptions = {
            viewContainerRef: this.viewContainerRef,
            fullscreen: true,
            animated: true,
            context: {
                speaker: this.speaker
            }
        };
        this.modalService.showModal(SpeakerDetailsComponent, options);
    }
}
