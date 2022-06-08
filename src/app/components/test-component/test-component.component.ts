import { Component, OnInit } from '@angular/core';
import {AppCounterService} from "../../services/appcounter.service";

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css'],
  providers: [AppCounterService]
})
export class TestComponentComponent implements OnInit {

  constructor(public appCounterService: AppCounterService) { }

  ngOnInit(): void {
  }

  inc() {
    this.appCounterService.increase()
  }

  dec() {
    this.appCounterService.decrease()
  }
}
