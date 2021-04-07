export class LoggingService {
  logStatusChange(newStatus: string) {
    console.log("A status change has occured, the new status is " + newStatus);
  }
}
