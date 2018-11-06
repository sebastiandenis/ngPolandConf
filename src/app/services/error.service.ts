import { Injectable } from "@angular/core";

import * as dialogs from "tns-core-modules/ui/dialogs";

@Injectable({
  providedIn: "root"
})
export class ErrorService {
  isDialogBoxShown = false;
  howManyTimes = 0;

  showNoConnectionDlg(): void {
    if (!this.isDialogBoxShown) {
      this.isDialogBoxShown = true;
      this.howManyTimes++;
      const dlgTitle = "Connection error";
      let dlgMessage = "";
      let dlgOkButtonText = "Ok";

      switch (this.howManyTimes) {
        case 1:
          dlgMessage =
            "Very slow or no Internet connection. \n\n" +
            "Make sure Wi-Fi or cellular data is turned on.\n\n" +
            "I will keep trying, wish me good luck!";
          break;
        case 2:
          dlgMessage = "Still can't connect :(";
          dlgOkButtonText = ":/";
          break;
        case 3:
          dlgMessage = "I'm trying again, maybe this time it will work :/";
          dlgOkButtonText = "I still have hope";
          break;
        case 4:
          dlgMessage = "Never give up, great things take time!";
          dlgOkButtonText = "Yes, I know";
          break;
        case 5:
          dlgMessage =
            "I'm trying, but you at that time, you can do something. Introduce yourself to a first random person.\n\n" +
            "You can always say that the application asked you to do it.";
          dlgOkButtonText = "Good idea";
          break;
        default:
          dlgMessage =
            "Very slow or no Internet connection. \n" +
            "Make sure Wi-Fi or cellular data is turned on.\n" +
            "I will keep trying, wish me good luck!";
          this.howManyTimes = 0;
      }

      dialogs
        .alert({
          title: dlgTitle,
          message: dlgMessage,
          okButtonText: dlgOkButtonText
        })
        .then(() => {
          this.isDialogBoxShown = false;
        });
    }
  }
}
