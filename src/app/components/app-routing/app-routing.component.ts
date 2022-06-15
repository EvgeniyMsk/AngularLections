import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-app-routing',
  templateUrl: './app-routing.component.html',
  styleUrls: ['./app-routing.component.css']
})
export class AppRoutingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goBase() {
    this.router.navigate(['/base'])
  }
}
