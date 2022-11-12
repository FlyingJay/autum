
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API } from '@app/services/api.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.page.html',
  styleUrls: ['./phone-number.page.scss'],
})
export class PhoneNumberPageComponent implements OnInit {
  customPopoverOptions: any = {};
  data: { 'name': string; 'dial_code': string; 'code': string; }[];
  selectedValue: any = '';
  inputValue: any = '';
  user: any;

  constructor(private route: Router,public api: API) {
    this.loadData()
    this.data = environment.COUNTRY_DATA;
  }

  loadData(){
    this.api.me((data) => {
      this.user = data
    });
  }

  updatePhone(){
    this.api.profileUpdate((profile) => {
      this.route.navigate(['login-phone-verification', { profile: profile.id, input: this.inputValue }]);
    },
    localStorage.getItem('user'),
    { phone: this.selectedValue + this.inputValue })
  }

  ngOnInit() {
    //console.log('ngOnInit');
  }
}
