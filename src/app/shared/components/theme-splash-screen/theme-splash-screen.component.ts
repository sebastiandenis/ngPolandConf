import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { timer } from "rxjs";
import { take } from "rxjs/operators";

@Component({
    selector: "ThemeSplashScreen",
    moduleId: module.id,
    templateUrl: "./theme-splash-screen.component.html",
    styleUrls: ["./theme-splash-screen.component.css"]
})
export class ThemeSplashScreenComponent implements OnInit {
    source$ = timer(6000);

    constructor(private params: ModalDialogParams) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.source$.pipe(take(1)).subscribe(val => {
            this.close();
        });
    }

    close() {
        this.params.closeCallback();
    }
}
