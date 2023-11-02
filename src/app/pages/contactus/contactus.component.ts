import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {
  constructor(private _fb: FormBuilder) {

  }
  // contactusFormGroup = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   email: new FormControl('', Validators.email),
  //   mobile: new FormControl()
  // });
  contactusFormGroup = this._fb.group({
    name: [],
    email: ['', [Validators.email, Validators.required]],
    mobile: []
  });
  // contactusFormGroup: any = {};
  submitContactInfo() {
    // console.log(this.contactusFormGroup.value);
    // console.log(this.contactusFormGroup.value.name);
    console.log(this.contactusFormGroup);
  }
}
