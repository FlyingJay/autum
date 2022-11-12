import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/services/data.service';
import { environment } from '@env/environment';
import { API } from '@app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.page.html',
  styleUrls: ['./delete-confirm.page.scss'],
})
export class DeleteConfirmPageComponent implements OnInit {
  pageLoaded=false;
  showOtherInput=false;
  otherText='';
  deleteData = [{
    color: '#f11f2b',
    icon: 'hammer-outline',
    iconColor: 'autum-red',
    head: 'Too many  ',
    head1: 'Bugs'
  }, {
    color: '#bd8daa',
    icon: 'thumbs-down-outline',
    iconColor: 'autum-red',
    head: 'Quality', 
    head1: 'of matches'
  }, {
     color: '#FAE0DE',
     icon: 'people-outline',
     iconColor: 'autum-red',
     head: 'Not enough', 
     head1: 'people'
  }, {
    color: '#fd5722',
    icon: 'heart-outline',
    iconColor: 'autum-red',
    head: 'i met  ', 
    head1: 'someone on autum'
  }, {
     color: '#D8D8D8',
     icon: 'cafe-outline',
     iconColor: 'autum-red',
     head: 'i met someone ', 
     head1: 'outside of the app'
  }, {
     color: '#37393e',
     icon: 'globe-outline',
     iconColor: 'autum-red',
     head: 'Not available', 
     head1: 'in my area'
  }];
  deleteOther = {
     color: '#37393e',
     icon: 'person-remove-outline',
     iconColor: 'autum-red',
     head: 'other', 
     head1: ''
  };
  constructor(public route: Router, public service: DataService, public api: API) {}

  ngOnInit() {
    //console.log('ngOnInit');
  }

  deleteAccount(reason) {
    this.api.profileUpdate(() => {
      this.api.profileDelete((user) => {
        this.route.navigate(['login']);
      },
      localStorage.getItem('user'))
    },
    localStorage.getItem('user'),
    reason)
  }

  goForModalReason(item: any) {
    if (item.icon ==  'person-remove-outline') {
      this.showOtherInput = true;
      return
    }

    if (window.confirm('Are you sure you want to delete your account?')) {
      if (item.icon == 'hammer-outline') {
        this.deleteAccount({ deleted_reason_bugs: true })
      } else if (item.icon ==  'thumbs-down-outline') {
        this.deleteAccount({ deleted_reason_quality: true })
      } else if (item.icon ==  'people-outline') {
        this.deleteAccount({ deleted_reason_quantity: true })
      } else if (item.icon ==  'heart-outline') {
        this.deleteAccount({ deleted_reason_another_onapp: true })
      } else if (item.icon ==  'cafe-outline') {
        this.deleteAccount({ deleted_reason_another_offapp: true })
      } else if (item.icon ==  'cafe-outline') {
        this.deleteAccount({ deleted_reason_not_available: true })
      }
    }
  }

  backOther() {
    this.showOtherInput = false;
  }

  submitOther() {
    if (window.confirm('Are you sure you want to delete your account?')) {
      this.deleteAccount({ deleted_reason_other: true, deleted_reason_other_text: this.otherText })
    }
  }

  ionViewDidEnter() {
    console.log('ngOnInit');
    this.pageLoaded=true;
  }
}
