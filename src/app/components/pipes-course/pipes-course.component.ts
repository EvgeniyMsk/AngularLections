import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../../app.component";

@Component({
  selector: 'app-pipes-course',
  templateUrl: './pipes-course.component.html',
  styleUrls: ['./pipes-course.component.css']
})
export class PipesCourseComponent implements OnInit {
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

  search: string
  isVisible = true

  posts: Post[] = [
    { title: 'First', text: 'First text', id: 1},
    { title: 'Second', text: 'Second text', id: 2},
    { title: 'Third', text: 'Third text', id: 3},
    { title: 'Fourth', text: 'Fourth text', id: 4},
  ]

  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise resolved')
    }, 5000)
  })

  myDate: Observable<Date> = new Observable<Date>(obs => {
    setInterval(() => {
      obs.next(new Date())
    }, 1000)
  })

  constructor() { }

  ngOnInit(): void {
  }



}
