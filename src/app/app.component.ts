import { Component } from '@angular/core';
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
export class AppComponent {

  posts: Post[] = [
    { title: 'First', text: 'first text', id: 1},
  ]


  constructor() {
  }

  updatePosts(post: Post) {
    this.posts.push(post)
  }
}
