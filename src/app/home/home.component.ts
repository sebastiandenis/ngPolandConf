import { Component, OnDestroy, OnInit, ChangeDetectorRef } from "@angular/core";
import * as app from "application";
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

// const orientation = require("nativescript-orientation");

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
    orientationApplier: any;
    isLandscape = false;
    constructor(
        private routerExtensions: RouterExtensions,
        private changeDetectorRef: ChangeDetectorRef
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // if (orientation.getOrientation() === "landscape") {
        //     this.isLandscape = true;
        // } else {
        //     this.isLandscape = false;
        // }
        // this.changeDetectorRef.detectChanges();

        // this.orientationApplier = orientation.addOrientationApplier(
        //     (o: any) => {
        //         if (orientation.getOrientation() === "landscape") {
        //             this.isLandscape = true;
        //         } else {
        //             this.isLandscape = false;
        //         }
        //         this.changeDetectorRef.detectChanges();
        //     }
        // );
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onNavItemTap(navItemRoute: string, sl: any): void {
        sl.className = "";
        sl.className = "highlighted";
        this.routerExtensions.navigate([navItemRoute]);
        // setTimeout(() => {
        //     this.routerExtensions.navigate([navItemRoute], {
        //         transition: {
        //             name: "fade"
        //         }
        //     });
        // }, 300);

        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }

    ngOnDestroy(): void {
        // orientation.removeOrientationApplier(this.orientationApplier);
    }
}
