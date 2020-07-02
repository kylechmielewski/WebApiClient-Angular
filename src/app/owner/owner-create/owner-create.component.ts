import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OwnerForCreation } from './../../_interfaces/owner-create.model';
import { ErrorHandlerService } from './../../shared/services/error-handler.service';
import { RepositoryService } from './../../shared/services/repository.service'
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-owner-create',
  templateUrl: './owner-create.component.html',
  styleUrls: ['./owner-create.component.css']
})
export class OwnerCreateComponent implements OnInit {
  public errorMessage: string = '';

  public ownerForm: FormGroup;

  constructor(private repository: RepositoryService,
    private errorHandler: ErrorHandlerService,
    private router: Router,
    private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.ownerForm = new FormGroup({
      //These names the same as .html for="<xxx>". Also same names as owner.model.ts
      //First parameter of FormControl is a default value for control
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      dateOfBirth: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
  }

  //.touched = Dont want to display an error if the user didn't place the cursor inside control at all
  public validateControl = (controlName: string) => {
    if (this.ownerForm.controls[controlName].invalid && this.ownerForm.controls[controlName].touched)
      return true;

    return false;
  }

  public hasError = (controlName: string, errorName: string) => {
    if (this.ownerForm.controls[controlName].hasError(errorName))
      return true;

    return false;
  }

  public executeDatePicker = (event) => {
    this.ownerForm.patchValue({ 'dateOfBirth': event });
  }

  public createOwner = (ownerFormValue) => {
    if (this.ownerForm.valid) {
      this.executeOwnerCreation(ownerFormValue);
    }
  }

  private executeOwnerCreation = (ownerFormValue) => {
    const owner: OwnerForCreation = {
      name: ownerFormValue.name,
      dateOfBirth: this.datePipe.transform(ownerFormValue.dateOfBirth, 'yyyy-MM-dd'),
      address: ownerFormValue.address
    }

    const apiUrl = 'api/owner';
    this.repository.create(apiUrl, owner)
      .subscribe(res => {
        $('#successModal').modal();
      },
        (error => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
      )
  }

  public redirectToOwnerList() {
    this.router.navigate(['/Owner/List'])
  }

}
