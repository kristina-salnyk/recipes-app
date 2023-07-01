import { Component, Input } from "@angular/core";

import { LoggingService } from "../logging.service";
import { AccountsService } from "../accounts.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"],
  providers: []
})
export class AccountComponent {
  @Input() account: { name: string, status: string } = { name: "", status: "" };
  @Input() id: number = 0;

  constructor(private loggingService: LoggingService, private accountService: AccountsService) {
  }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountService.statusUpdated.emit(status);
  }
}
