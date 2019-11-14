import { Component, Input, OnInit, ViewContainerRef } from "@angular/core";
import { Workshop } from "~/app/models/workshop.model";
import {
    ModalDialogOptions,
    ModalDialogService
} from "nativescript-angular/modal-dialog";
import { SpeakerDetailsComponent } from "~/app/shared/components/speaker-details/speaker-details.component";

@Component({
    selector: "Workshop",
    moduleId: module.id,
    templateUrl: "./workshop.component.html",
    styleUrls: ["./workshop.component.css"]
})
export class WorkshopComponent implements OnInit {
    @Input()
    workshop: Workshop;

    constructor(
        private modalService: ModalDialogService,
        private viewContainerRef: ViewContainerRef
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {}

    showModal() {
        this.openModal();
    }

    private openModal(): void {
        const options: ModalDialogOptions = {
            viewContainerRef: this.viewContainerRef,
            fullscreen: true,
            animated: true,
            context: {
                speaker: this.workshop.instructor
            }
        };
        this.modalService.showModal(SpeakerDetailsComponent, options);
    }
}
