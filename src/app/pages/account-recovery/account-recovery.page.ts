
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-recovery',
  templateUrl: './account-recovery.page.html',
  styleUrls: ['./account-recovery.page.scss'],
})
export class AccountRecoveryPageComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
    console.log('ngOnInit');
  }
  loginWithEmail() {
    this.route.navigate(['login-email']);
  }
}
