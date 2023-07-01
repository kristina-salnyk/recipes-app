import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable({
  providedIn: "root"
})
export class UserService {
  activeUsers: string[] = ["Bill", "Nick"];
  inactiveUsers: string[] = ["Anna", "Ola"];

  constructor(private counterService: CounterService) {
  }

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementActiveToInactive();
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementInActiveToActive();
  }
}
