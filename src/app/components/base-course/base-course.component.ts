import { Component, OnInit } from '@angular/core';
import {Post} from "../../app.component";

@Component({
  selector: 'app-base-course',
  templateUrl: './base-course.component.html',
  styleUrls: ['./base-course.component.css']
})
export class BaseCourseComponent implements OnInit {
  posts: Post[] = [
    { title: 'First', text: 'First text', id: 1},
    { title: 'Second', text: 'Second text', id: 2},
    { title: 'Third', text: 'Third text', id: 3},
    { title: 'Fourth', text: 'Fourth text', id: 4},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addPost(post: Post) {
    this.posts.push(post)
  }

  removePost(id: number) {
    this.posts = this.posts.filter(post => post.id !== id)
  }
}
