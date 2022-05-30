import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Person {
  name: string,
  address: string
  phone: string
}

const COVID_API = 'http://localhost:8080/api/covid'

@Component({
  selector: 'app-covidinfo',
  templateUrl: './covidinfo.component.html',
  styleUrls: ['./covidinfo.component.css']
})
export class CovidinfoComponent implements OnInit {
  otdelNumber: number
  date: Date
  quarantine: number
  distance: number
  suspended: number
  research: number
  researchToday: number
  covidToday: number
  sickPeople: Array<Person> = new Array<Person>()
  sickPeoplePerDay: Array<Person> = new Array<Person>()
  sickCovid: Array<Person> = new Array<Person>()
  recoveredPeople: Array<Person> = new Array<Person>()
  recoveredTotal: number

  constructor(private httpClient: HttpClient) {
    this.otdelNumber = 1
    this.date = new Date()
    this.researchToday = 0
    this.sickPeople.push({ name: 'Логвинов Евгений Вячеславович', address: 'Москва, Зеленый проспект, 50, кв. 344', phone: '89117000034'})
    this.sickPeople.push({ name: 'Логвинова Оксана Мирзаевна', address: 'Москва, Зеленый проспект, 50, кв. 344', phone: '89251989411'})
    this.recoveredTotal = 10
    this.getCovidInfo().subscribe(value => {
      this.sickPeople = value.personList
      this.quarantine = Number(value.quarantine)
      this.distance = Number(value.distance)
      this.suspended = Number(value.suspended)
      this.research = Number(value.research)
      this.covidToday = Number(value.covidToday)
    })
  }

  getCovidInfo(): Observable<any> {
    return this.httpClient.get(COVID_API)
  }

  ngOnInit(): void {
  }

  addPerson() {
    this.sickPeoplePerDay.push({ name: '', address: '', phone: ''})
  }

  recoverPerson(i: number) {
    this.recoveredTotal++
    this.recoveredPeople.push(this.sickPeople[i])
    this.sickPeople.splice(i, 1)
  }

  addCovidPerson(i: number) {
    this.sickCovid.push(this.sickPeople[i])
  }

  deleteSickPerson(i: number) {
    this.sickPeoplePerDay.splice(i, 1)
  }

}
