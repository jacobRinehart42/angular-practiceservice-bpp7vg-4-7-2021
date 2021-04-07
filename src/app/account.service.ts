import { Injectable} from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountService {
  accounts = [
    {
      name: "Master Account",
      status: "active"
    },
    {
      name: "Test Account",
      status: "inactive"
    },
    {
      name: "Hidden Account",
      status: "unknown"
    }
  ];


  onAccountAdded(name: string, status: string) {
    this.accounts.push({ name, status });
    this.logService.logStatusChange(status);
  }

  onStatusChanged(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
    this.logService.logStatusChange(newStatus);
  }

  constructor(private logService: LoggingService) {}
}
