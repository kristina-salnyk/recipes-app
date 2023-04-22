import { Component } from "@angular/core";

@Component({
  selector: "app-warning-alert",
  template: "<p>warning-alert works!</p>",
  styles: [
    `
      p {
        padding: 20px;
        width: 200px;
        color: red;
        border: 2px solid red;
      }
    `,
  ],
})
export class WarningAlertComponent {}
