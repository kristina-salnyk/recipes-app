import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServerElement } from '../shared/server-element.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();
  newServerName: string = '';
  newServerContent: string = '';

  onAddServer() {
    this.serverCreated.emit({
      name: this.newServerName,
      content: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      name: this.newServerName,
      content: this.newServerContent,
    });
  }
}
