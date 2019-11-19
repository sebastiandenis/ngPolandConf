import { Component, Input, ViewContainerRef } from "@angular/core";
import {
    ModalDialogOptions,
    ModalDialogService
} from "nativescript-angular/modal-dialog";
import { EventItem } from "~/app/models/event-item.model";
import { SpeakerDetailsComponent } from "~/app/shared/components/speaker-details/speaker-details.component";
import { EventItemDetailsComponent } from '~/app/shared/components/event-item-details/event-item-details.component';

@Component({
    selector: "EventItem",
    moduleId: module.id,
    templateUrl: "./event-item.component.html",
    styleUrls: ["./event-item.component.css"]
})
export class EventItemComponent {
    @Input()
    eventItem: EventItem;

    constructor(
        private modalService: ModalDialogService,
        private viewContainerRef: ViewContainerRef
    ) {
        // Use the component constructor to inject providers.
    }

    isNow(): boolean {
        const now = new Date();
        // console.log("Now: " + now);

        const eventStart = new Date(this.eventItem.startDate);
        const eventEnd = new Date(this.eventItem.endDate);

        if (eventStart <= now && eventEnd >= now) {
            // console.log("tak to teraz!");

            return true;
        } else {
            return false;
        }
    }

    showModal() {
        this.openModal();
    }

    private openModal(): void {
        const options: ModalDialogOptions = {
            viewContainerRef: this.viewContainerRef,
            fullscreen: true,
            animated: true,
            context: {
                eventItem: this.eventItem
            }
        };
        this.modalService.showModal(EventItemDetailsComponent, options);
    }
}
