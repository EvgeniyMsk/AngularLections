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



  constructor() {
  }

  ngOnInit(): void {
  }
}
