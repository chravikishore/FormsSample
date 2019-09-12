import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  profileForm: FormGroup;
  fullName: string;
  constructor() { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl(''),
      isActive: new FormControl(),
    });
  }

  onSubmit() {
    this.fullName = this.profileForm.value.firstName + ' ' + this.profileForm.value.lastName;
  }

}
