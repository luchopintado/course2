import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  Input,
  ViewEncapsulation,
  SimpleChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, native
})
// tslint:disable-next-line:max-line-length
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!', changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Text content', this.header.nativeElement.textContent);
  }

  ngDoCheck () {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit () {
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked () {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('Text content', this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy () {
    console.log('ngOnDestroy called.');
  }

}
