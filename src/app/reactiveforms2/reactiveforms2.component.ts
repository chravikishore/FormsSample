import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms2',
  templateUrl: './reactiveforms2.component.html',
  styleUrls: ['./reactiveforms2.component.css']
})
export class Reactiveforms2Component implements OnInit {

  profileForm: FormGroup;
  c: number;
  constructor() { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      a: new FormControl(null, [Validators.required]),
      b: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    let a = this.profileForm && this.profileForm.value && this.profileForm.value.a;
    let b = this.profileForm && this.profileForm.value && this.profileForm.value.b;
    this.c = a + b;
  }

}
