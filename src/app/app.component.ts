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
  isVisible = true

  posts: Post[] = [
    { title: 'First', text: 'First text', id: 1},
    { title: 'Second', text: 'Second text', id: 2}
  ]


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
