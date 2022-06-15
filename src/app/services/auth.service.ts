import { Injectable } from '@angular/core';
import {UrlTree} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth = false

  constructor() { }

  login() {
    this.isAuth = true
  }

  logout() {
    this.isAuth = false
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.isAuth)
      }, 1000)
    })
  }
}
