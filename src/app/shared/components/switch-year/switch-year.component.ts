import { Component, OnInit, ViewContainerRef, OnDestroy } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { EventData } from "tns-core-modules/data/observable/observable";
import { AppStateFacadeService } from "../../../services/app-state-facade.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
    selector: "SwitchYear",
    moduleId: module.id,
    templateUrl: "./switch-year.component.html",
    styleUrls: ["./switch-year.component.css"]
})
export class SwitchYearComponent implements OnInit, OnDestroy {
    years = ["2019", "2018"];
    selectedYearIndex: number;
    selectedIdx = 0;
    destroySubject$ = new Subject<void>();
    constructor(
        private params: ModalDialogParams,
        private appStateFacade: AppStateFacadeService
    ) {
        // Use the component constructor to inject providers.
    }

    onSelectedIndexChanged(args: EventData) {
      const picker = <ListPicker>args.object;
      this.selectedIdx = picker.selectedIndex;
  }

    onYearAccept() {

        this.appStateFacade.updateConfId(this.years[this.selectedIdx]);
        this.close();
    }

    close() {
        this.params.closeCallback();
    }

    ngOnInit(): void {
        this.appStateFacade
            .getConfId()
            .pipe(takeUntil(this.destroySubject$))
            .subscribe((confId: string) => {
                this.selectedYearIndex = this.years.indexOf(confId);
            });
        // Init your component properties here.
    }

    ngOnDestroy() {
        this.destroySubject$.next();
    }
}
