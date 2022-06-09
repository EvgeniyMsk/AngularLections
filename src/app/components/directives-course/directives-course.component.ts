import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-course',
  templateUrl: './directives-course.component.html',
  styleUrls: ['./directives-course.component.css']
})
export class DirectivesCourseComponent implements OnInit {

  search: string
  isVisible = true

  constructor() { }

  ngOnInit(): void {
  }

}
