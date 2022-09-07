import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  @Input() icon: string = '';
  @Input() name = '';
  @Input() styleButton = '';
  @Output() funtionButton = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
