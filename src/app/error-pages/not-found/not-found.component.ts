import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  //We are not using apostrophes but backticks (`).
  //All the content inside the backticks will be considered as a string,
  //even the apostrophe sign in the string
  public notFoundText: string = `404 Page Not Found`

  constructor() { }

  ngOnInit(): void {
  }

}
