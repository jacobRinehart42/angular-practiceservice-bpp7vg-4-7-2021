import { Component, EventEmitter, Input, Output } from "@angular/core";
import { AccountService } from "../account.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"]
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  onSetTo(status: string) {
    this.acctService.onStatusChanged(this.id, status);
  }

  constructor(private acctService: AccountService) {}
}
