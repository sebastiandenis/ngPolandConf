import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NgGirlsComponent } from "~/app/ng-girls/ng-girls.component";

const routes: Routes = [{ path: "", component: NgGirlsComponent }];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class NgGirlsRoutingModule {}
