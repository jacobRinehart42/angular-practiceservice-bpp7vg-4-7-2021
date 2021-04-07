import { Component, EventEmitter, Output } from "@angular/core";
import { AccountService } from "../account.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"]
})
export class NewAccountComponent {
  onCreateAccount(accountName: string, accountStatus: string) {
    this.acctService.onAccountAdded(accountName, accountStatus);
  }

  constructor(private acctService: AccountService) {}
}
