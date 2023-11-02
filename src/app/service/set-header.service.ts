import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetHeaderService {
  loggedIn: BehaviorSubject<boolean>;

  constructor() {
    this.loggedIn = new BehaviorSubject<boolean>(true);
  };

  login() {
    this.loggedIn.next(true);
  };

  logout() {
    this.loggedIn.next(false);
  };
};
