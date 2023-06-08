/// <reference types="node" />

import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Output() event = new EventEmitter<number>();
  intervalId: NodeJS.Timer | undefined;
  count: number = 0;

  onStartGameClick() {
    if (this.intervalId) return;

    this.intervalId = setInterval(() => {
      this.event.emit(++this.count);
    }, 1000);
  }

  onStopGameClick() {
    clearInterval(this.intervalId);
    this.intervalId = undefined;
  }
}
