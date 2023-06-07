import { Component } from '@angular/core';
import { ServerElement } from './shared/server-element.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements: ServerElement[] = [
    { type: 'server', name: 'TestServer', content: 'TestServer content' },
  ];

  onServerAdded(serverData: { name: string; content: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content,
    });
  }

  onBlueprintAdded(blueprintData: { name: string; content: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.name,
      content: blueprintData.content,
    });
  }
}
