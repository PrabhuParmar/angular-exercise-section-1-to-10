import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SetHeaderService } from '../service/set-header.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  email: string | any = '';
  password: string | any = '';

  constructor(private router: Router, private navBarService: SetHeaderService) { }
  ngOnDestroy(): void {
    this.navBarService.login();
  };
  ngOnInit(): void {
    this.navBarService.logout();
    this.submitDetails();
  };

  loginDetails = new FormGroup(
    {
      emailData: new FormControl(''),
      passwordData: new FormControl('')
    }
  );

  // check login details 
  submitDetails = () => {
    this.email = this.loginDetails.value.emailData;
    this.password = this.loginDetails.value.passwordData;
    if (this.email === 'ronak@123.com' && this.password == 123) {
      localStorage.setItem('loginStatus', 'true');
      this.router.navigate(['item-list']);
    } else {
      localStorage.setItem('loginStatus', 'false');
    };
  };
};
