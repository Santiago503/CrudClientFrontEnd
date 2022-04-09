import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {
  @Input() label: string;
  @Output() create = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onCreate(event: any) {
    this.create.emit(event);
  }

}
