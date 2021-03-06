import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.css', '../modal-shared.component.css']
})
export class SuccessModalComponent implements OnInit {
  @Input() public modalHeaderText: string;
  @Input() public modalBodyText: string;
  @Input() public okButtonText: string;
  //Used to emit an event from a child to a parent component
  @Output() public redirectOnOK = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public emitEvent = () => {
    this.redirectOnOK.emit();
  }

}
