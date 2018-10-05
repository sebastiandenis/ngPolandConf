import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Speaker } from "~/app/models/speaker.model";
import * as utils from "tns-core-modules/utils/utils";

@Component({
  selector: "SpeakerDetails",
  moduleId: module.id,
  templateUrl: "./speaker-details.component.html",
  styleUrls: ["./speaker-details.component.css"]
})
export class SpeakerDetailsComponent implements OnInit {
  speaker: Speaker;

  constructor(private params: ModalDialogParams) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {

    if (this.params.context.speaker) {
      this.speaker = this.params.context.speaker;
    }
  }

  close() {
    this.params.closeCallback();
  }

  openUrlLink(url: string): void {
    utils.openUrl(url);
  }
}
