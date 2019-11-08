import {
    Component,
    OnDestroy,
    OnInit,
    ChangeDetectorRef
} from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

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
        private routerExtensions: RouterExtensions
    ) {

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
        //         console.log("Orientation: ", o);
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
        this.routerExtensions.navigate([navItemRoute], {
            clearHistory: navItemRoute === "/home" ? true : false,
            transition: {
                name: "fade"
            }
        });
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }

    ngOnDestroy(): void {
        // orientation.removeOrientationApplier(this.orientationApplier);
    }
}
