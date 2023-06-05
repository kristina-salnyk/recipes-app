import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  detailsDisplayed: boolean = false;
  logs: string[] = [];

  onDisplayDetailsClick() {
    this.detailsDisplayed = !this.detailsDisplayed;
    this.logs.push(String(Date.now()));
  }

  getLogStyle(log: string): object {
    const idx: number = this.logs.indexOf(log);
    return idx >= 4 ? { backgroundColor: 'blue' } : {};
  }

  getLogClass(log: string): object {
    const idx: number = this.logs.indexOf(log);
    return { accent: idx >= 4 };
  }
}
