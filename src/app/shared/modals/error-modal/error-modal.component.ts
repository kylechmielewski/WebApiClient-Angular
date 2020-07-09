import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.css', '../modal-shared.component.css']
})
export class ErrorModalComponent implements OnInit {
  //We are decorating our properties with the @Input decorator and by doing so our
  //parent component can set values to these properties by using property binding
  @Input() public modalHeaderText: string;
  @Input() public modalBodyText: string;
  @Input() public okButtonText: string;

  constructor() { }

  ngOnInit(): void {
  }

}
