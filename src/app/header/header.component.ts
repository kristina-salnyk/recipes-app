import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() switchViewEvent = new EventEmitter<string>();

  onSwitchView(viewName: string) {
    this.switchViewEvent.emit(viewName);
  }
}
