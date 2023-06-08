import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

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
  // newServerName: string = '';
  // newServerContent: string = '';
  @ViewChild('serverContentInput', { static: true })
  serverContentInput: ElementRef = new ElementRef(null);

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      name: serverNameInput.value,
      // content: this.newServerContent,
      content: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      name: serverNameInput.value,
      // content: this.newServerContent,
      content: this.serverContentInput.nativeElement.value,
    });
  }
}
