import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ServerElement } from '../shared/server-element.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('serverElement') element: ServerElement = {
    type: '',
    name: '',
    content: '',
  };
  @Input() name: string = '';
  @ViewChild('heading', { static: true }) heading: ElementRef = new ElementRef(
    null
  );
  @ContentChild('contentParagraph', { static: true })
  contentParagraph: ElementRef = new ElementRef(null);

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('Text Content: ' + this.heading.nativeElement.textContent);
    console.log(
      'Text Content of Paragraph: ' +
        this.contentParagraph.nativeElement.textContent
    );
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log('Text Content: ' + this.heading.nativeElement.textContent);
    console.log(
      'Text Content of Paragraph: ' +
        this.contentParagraph.nativeElement.textContent
    );
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log('Text Content: ' + this.heading.nativeElement.textContent);
    console.log(
      'Text Content of Paragraph: ' +
        this.contentParagraph.nativeElement.textContent
    );
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
