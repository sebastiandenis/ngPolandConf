import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { registerElement } from "nativescript-angular/element-registry";
import { AboutComponent } from "./containers/about/about.component";
import { HomeComponent } from "./containers/home/home.component";
import { InfoComponent } from "./containers/info/info.component";
import { NgGirlsComponent } from "./containers/ng-girls/ng-girls.component";
import { ScheduleComponent } from "./containers/schedule/schedule.component";
import { SpeakersComponent } from "./containers/speakers/speakers.component";
import { SpeakerComponent } from "./containers/speakers/components/speaker/speaker.component";
import { SpeakersListComponent } from "./containers/speakers/containters/speakers-list/speakers-list.component";
import { SpeakerDetailsComponent } from "./shared/components/speaker-details/speaker-details.component";
import { WorkshopsComponent } from "./containers/workshops/workshops.component";
import { WorkshopComponent } from "./containers/workshops/components/workshop/workshop.component";
import { InfoItemComponent } from "./containers/info/components/info-item/info-item.component";
import { MdToHtmlPipe } from "./pipes/md-to-html.pipe";
import { JsPolandComponent } from "./containers/schedule/containers/jspoland/js-poland.component";
import { NgPolandComponent } from "./containers/schedule/containers/ngpoland/ng-poland.component";
import { EventItemComponent } from "./containers/schedule/components/event-item/event-item.component";
import { SwitchYearComponent } from "./shared/components/switch-year/switch-year.component";
import { TNSImageModule } from "nativescript-image/angular";
import * as imageModule from "nativescript-image";
import * as applicationModule from "@nativescript/core/application";
import { ThemeSplashScreenComponent } from "./shared/components/theme-splash-screen/theme-splash-screen.component";
import { NgRippleModule } from "nativescript-ng-ripple";

registerElement(
    "PullToRefresh",
    () => require("@nstudio/nativescript-pulltorefresh").PullToRefresh
);

if (applicationModule.android) {
    applicationModule.on(applicationModule.launchEvent, () => {
        imageModule.initialize();
    });
}



@NgModule({
    bootstrap: [AppComponent],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        NativeScriptHttpClientModule,
        TNSImageModule,
        NgRippleModule,
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        InfoComponent,
        InfoItemComponent,
        NgGirlsComponent,
        ScheduleComponent,
        JsPolandComponent,
        NgPolandComponent,
        EventItemComponent,
        SpeakersComponent,
        SpeakerComponent,
        SpeakersListComponent,
        SpeakerDetailsComponent,
        WorkshopsComponent,
        WorkshopComponent,
        MdToHtmlPipe,
        SwitchYearComponent,
        ThemeSplashScreenComponent,
        SpeakerDetailsComponent
    ],
    entryComponents: [
        SpeakerDetailsComponent,
        SwitchYearComponent,
        ThemeSplashScreenComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
