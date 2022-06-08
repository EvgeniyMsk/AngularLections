import {Component, OnInit} from '@angular/core';
import {interval, Observable, Subject, Subscription} from "rxjs";
import {filter} from "rxjs/operators";

export interface Post {
  title: string,
  text: string,
  id?: number
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

  myDate: Observable<Date> = new Observable<Date>(obs => {
    setInterval(() => {
      obs.next(new Date())
    }, 1000)
  })

  constructor() {
  }

  ngOnInit(): void {
  }

  addPost(post: Post) {
    this.posts.push(post)
  }

  removePost(id: number) {
    this.posts = this.posts.filter(post => post.id !== id)
  }
}
