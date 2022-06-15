import { Injectable } from '@angular/core';
import {Post} from "../app.component";

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  posts: Post[] = [
    { id: 1, title: 'Title 1', text: 'Text 1'},
    { id: 2, title: 'Title 2', text: 'Text 2'},
    { id: 3, title: 'Title 3', text: 'Text 3'},
    { id: 4, title: 'Title 4', text: 'Text 4'},
    { id: 5, title: 'Title 5', text: 'Text 5'},
    { id: 6, title: 'Title 6', text: 'Text 6'},
    { id: 7, title: 'Title 7', text: 'Text 7'},
    { id: 8, title: 'Title 8', text: 'Text 8'},
    { id: 9, title: 'Title 9', text: 'Text 9'},
    { id: 10, title: 'Title 10', text: 'Text 10'},
  ]

  constructor() { }

  getPosts(): Post[] {
    return this.posts
  }
}
