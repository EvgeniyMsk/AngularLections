import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from "@angular/common/http";
import {delay, tap} from "rxjs/operators";

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos?_limit='

export interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {
  todos: Todo[] = []
  count = 1
  title: string = ''
  loading: boolean = false
  isSorry = false

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

  }

  getPosts() {
    this.loading = true
    this.todos = []
    const headers = new HttpHeaders({
      'MyCustomHeader': Math.random().toString()
    })
    const httpParams = new HttpParams().set('_limit', this.count)
    this.httpClient.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
      params: httpParams,
      headers: headers,
      observe: 'response'
    })
      .pipe(delay(1000))
      .subscribe(response => {
        console.log(response.headers)
        this.todos = <Todo[]>response.body
        this.loading = false
      }, error => {
        if (error.status === 404) {
          this.loading = false
          this.isSorry = true
        }
      })
  }

  sendPost() {
    if (!this.title.trim()) {

    }
    const todo = {
      title: this.title,
      completed: false
    }

    this.httpClient.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
      .subscribe(response => {
        this.todos.push(response)
      })
  }

  removeTodo(id: number) {
    this.httpClient.delete(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      observe: 'events'
    })
      .pipe(tap(event => {
        if (event.type === HttpEventType.Sent)
          console.log('Отправлено')
        if (event.type === HttpEventType.Response)
          console.log('Получено')
      }))
      .subscribe(response => {
        this.todos = this.todos.filter(todo => todo.id !== id)
      })
  }


  completeTodo(id: number) {
    const todo = {
      completed: true
    }
    this.httpClient.put(`https://jsonplaceholder.typicode.com/todos/${id}`, todo, {
      responseType: 'json'
    }).subscribe(response => {
      console.log(response)
        this.todos.find(t => t.id === id)!.completed = true
      })
  }
}
