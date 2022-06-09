import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {MyValidators} from "../../my.validators";
import {Pair} from "../../app.component";

@Component({
  selector: 'app-validator-course',
  templateUrl: './validator-course.component.html',
  styleUrls: ['./validator-course.component.css']
})
export class ValidatorCourseComponent implements OnInit {
  form: FormGroup

  appState = 'off'

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required, MyValidators.restrictedEmails], MyValidators.uniqueEmail),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      address: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('', [Validators.required])
      }),
      skills: new FormArray([])
    })
  }

  submit() {
    console.log('Sumbitted', this.form)
    console.log({...this.form.value})
    this.form.reset()
  }

  setCapital() {
    const cityMap: Pair[] = [
      { key: 'ru', value: 'Москва'},
      { key: 'ua', value: 'Киев'},
      { key: 'by', value: 'Минск'}
    ]
    const cityKey: string = this.form.get('address')?.get('country')?.value
    const city = cityMap.filter(city => city.key === cityKey)[0].value
    this.form.patchValue({
      address: { city: city}
    })
  }

  addSkill() {
    const control = new FormControl('', [Validators.required]);
    (<FormArray>this.form.get('skills')).push(control)
  }

  getFormControls() {
    return (<FormArray>this.form.get('skills')).controls
  }

  handleChange() {
    console.log(this.appState)
  }

}
