import {Component, OnInit} from '@angular/core';
import {interval, Observable, Subject, Subscription} from "rxjs";
import {filter} from "rxjs/operators";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {MyValidators} from "./my.validators";

export interface Post {
  title: string,
  text: string,
  id?: number
}

export interface Pair {
  key: string,
  value: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  e: number = Math.E
  str: string = 'Hello World!'
  date: Date = new Date()
  fl = 0.42
  obj = {
    a: 1,
    b: {
      c: 1,
      d: {
        e: 3,
        f: 4
      }
    }
  }

  isVisible = true

  posts: Post[] = [
    { title: 'First', text: 'First text', id: 1},
    { title: 'Second', text: 'Second text', id: 2},
    { title: 'Third', text: 'Third text', id: 3},
    { title: 'Fourth', text: 'Fourth text', id: 4},
  ]

  search: string

  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise resolved')
    }, 5000)
  })

  form: FormGroup

  myDate: Observable<Date> = new Observable<Date>(obs => {
    setInterval(() => {
      obs.next(new Date())
    }, 1000)
  })

  appState = 'off'

  constructor() {
  }

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

  addPost(post: Post) {
    this.posts.push(post)
  }

  removePost(id: number) {
    this.posts = this.posts.filter(post => post.id !== id)
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
