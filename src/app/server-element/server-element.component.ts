import { Component, Input } from '@angular/core';
import { ServerElement } from '../shared/server-element.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent {
  @Input('serverElement') element: ServerElement = {
    type: '',
    name: '',
    content: '',
  };
}
