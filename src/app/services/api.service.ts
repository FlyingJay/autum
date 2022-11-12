import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

declare var require: any


function logout(){
  localStorage.removeItem('user');
  localStorage.removeItem('token');
}

function logoutIfForbidden(error){
  if (error && error['message'] == "Request failed with status code 403") {
    logout()
  }
}

function printError(error){
  //Development only
  //alert(JSON.stringify(error));

  if (error.response.data['detail'] && error.response.data['detail'] == "Invalid token.") {
    logout()
  }
}

@Injectable()
export class API {
  axios = require('axios').default;
  apiRoot = ''

  constructor() {
    this.apiRoot = environment.apiUrl
    //Comment this, then login to fix token problems
    //localStorage.removeItem('token')
    if (localStorage.getItem('token')) {
      this.axios.defaults.headers.common['Authorization'] = 'Token ' + localStorage.getItem('token')
    }
  }

  ambassadors(callback): any {
    this.axios.get(`${this.apiRoot}/v1/ambassadors/`).then((response) => {
      callback(response.data['results'])
    }).catch((error) => {
      printError(error);
    })
  }

  signup(callback, id): any {
    this.axios.get(`${this.apiRoot}/v1/signups/${id}/?expand=interests.interest,school,gender`).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  signupFinish(callback, id): any {
    this.axios.get(`${this.apiRoot}/v1/signups/${id}/finish/`, { headers: { 'Authorization': null } }).then((response) => {
      localStorage.setItem('user', response.data['user'] && response.data['user'].id);
      localStorage.setItem('token', response.data['token']);
      this.axios.defaults.headers.common['Authorization'] = 'Token ' + response.data['token']
      callback()
    }).catch((error) => {
      if (error.message && error.message == "Request failed with status code 400") {
        alert("There was a problem creating your account, please try again. \n\nA new email address may work, but if it doesn't please let us know!")
      } else {
        printError(error);
      }
    })
  }

  signupCreate(callback, data): any {
    this.axios.post(`${this.apiRoot}/v1/signups/`, data).then((response) => {
      callback(response.data)
    }).catch((error) => {
      alert("Invalid phone number, or you already have an account. Keep getting this message? Clear cached data from this app in your device's settings.");
      printError(error);
    })
  }

  signupUpdate(callback, id, data): any {
    this.axios.patch(`${this.apiRoot}/v1/signups/${id}/`, data).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  signupUpdateMale(callback, id): any {
    this.axios.get(`${this.apiRoot}/v1/signups/${id}/male/`).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  signupUpdateFemale(callback, id): any {
    this.axios.get(`${this.apiRoot}/v1/signups/${id}/female/`).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  login(callback, email, password): any {
    this.axios.post(`${this.apiRoot}/auth/password/`, {
      email,
      password
    }, { headers: { 'Authorization': null } }).then((response) => {
      localStorage.setItem('user', response.data['user'] && response.data['user'].id);
      localStorage.setItem('token', response.data['token']);
      this.axios.defaults.headers.common['Authorization'] = 'Token ' + response.data['token']
      callback()
    }).catch((error) => {
      printError(error);
    })
  }

  logout(): void {
    logout()
  }

  register(callback, data): any {
    this.axios.post(`${this.apiRoot}/auth/register/`, data, { headers: { 'Authorization': null } }).then((response) => {
      localStorage.setItem('user', response.data['user'] && response.data['user'].id);
      localStorage.setItem('token', response.data['token']);
      this.axios.defaults.headers.common['Authorization'] = 'Token ' + response.data['token']
      callback()
    }).catch((error) => {
      printError(error);
    })
  }

  me(callback): any {
    this.axios.get(`${this.apiRoot}/v1/profiles/${localStorage.getItem('user')}/?expand=pictures,interests.interest,experiences.experience,gender,school`).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  profileLoginPhone(callback, data): any {
    delete this.axios.defaults.headers.common["Authorization"];
    this.axios.get(`${this.apiRoot}/v1/profiles/loginPhone/`, { params: data }).then((response) => {
      callback(response.data, null)
    }).catch((error) => {
      //printError(error);
      callback(null, error)
    })
  }

  profileLoginPhoneVerification(callback, id, data): any {
    this.axios.get(`${this.apiRoot}/v1/profiles/${id}/loginPhoneVerification/`, { params: data, headers: { 'Authorization': null } }).then((response) => {
      localStorage.setItem('user', response.data['user'] && response.data['user'].id);
      localStorage.setItem('token', response.data['token']);
      this.axios.defaults.headers.common['Authorization'] = 'Token ' + response.data['token']
      callback()
    }).catch((error) => {
      alert('Failed to verify your number, please double-check that your code is correct.');
      //printError(error);
    })
  }

  profiles(callback): any {
    this.axios.get(`${this.apiRoot}/v1/profiles/`).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  profilesSwipeable(callback): any {
    this.axios.get(`${this.apiRoot}/v1/profiles/swipeable/?expand=pictures,interests.interest,experiences.experience,school`).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  profileUpdate(callback, id, data): any {
    this.axios.patch(`${this.apiRoot}/v1/profiles/${id}/`, data).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  profileSwipeLeft(callback, id): any {
    this.axios.get(`${this.apiRoot}/v1/profiles/${id}/swipeLeft/`).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  profileSwipeRight(callback, id): any {
    this.axios.get(`${this.apiRoot}/v1/profiles/${id}/swipeRight/`).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  profileSwipeUp(callback, id): any {
    this.axios.get(`${this.apiRoot}/v1/profiles/${id}/swipeUp/`).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  profileDelete(callback, id): any {
    this.axios.delete(`${this.apiRoot}/v1/profiles/${id}/`).then((response) => {
      logout()
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  profileClearLikes(callback): any {
    this.axios.get(`${this.apiRoot}/v1/profiles/clearLikes/`).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  like(callback, id): any {
    this.axios.get(`${this.apiRoot}/v1/likes/${id}/?expand=liker,subject`).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  likes(callback): any {
    this.axios.get(`${this.apiRoot}/v1/likes/`).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  likesMatches(callback): any {
    this.axios.get(`${this.apiRoot}/v1/likes/meMatches/?expand=liker.pictures,liker.interests.interest,liker.experiences.experience,subject.pictures,subject.interests.interest,subject.experiences.experience`).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  likeCreate(callback, data): any {
    this.axios.post(`${this.apiRoot}/v1/likes/`, data).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  likeUpdate(callback, id, data): any {
    this.axios.patch(`${this.apiRoot}/v1/likes/${id}/`, data).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  likeDelete(callback, id): any {
    this.axios.delete(`${this.apiRoot}/v1/likes/${id}/`).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  likeMessages(callback, id): any {
    this.axios.get(`${this.apiRoot}/v1/likes/${id}/messages/?expand=profile`).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  messages(callback): any {
    this.axios.get(`${this.apiRoot}/v1/likes/`).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  messageCreate(callback, data): any {
    this.axios.post(`${this.apiRoot}/v1/messages/`, data).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  messageUpdate(callback, id, data): any {
    this.axios.patch(`${this.apiRoot}/v1/messages/${id}/`, data).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  messageDelete(callback, id): any {
    this.axios.delete(`${this.apiRoot}/v1/messages/${id}/`).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  profilePictures(callback): any {
    this.axios.get(`${this.apiRoot}/v1/profile-pictures/`).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  profilePictureCreate(callback, data): any {
    this.axios.post(`${this.apiRoot}/v1/profile-pictures/`, data).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  profilePictureUpdate(callback, id, data): any {
    this.axios.patch(`${this.apiRoot}/v1/profile-pictures/${id}/`, data).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  profilePictureDelete(callback, id): any {
    this.axios.delete(`${this.apiRoot}/v1/profile-pictures/${id}/`).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  profileInterests(callback): any {
    this.axios.get(`${this.apiRoot}/v1/profile-interests/`).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  profileInterestCreate(callback, data): any {
    this.axios.post(`${this.apiRoot}/v1/profile-interests/`, data).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  profileInterestUpdate(callback, id, data): any {
    this.axios.patch(`${this.apiRoot}/v1/profile-interests/${id}/`, data).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  profileInterestDelete(callback, id): any {
    this.axios.delete(`${this.apiRoot}/v1/profile-interests/${id}/`).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  interestSearch(callback, query): any {
    this.axios.get(`${this.apiRoot}/v1/interests/?name__icontains=${query}`).then((response) => {
      callback(response.data['results'])
    }).catch((error) => {
      printError(error);
    })
  }

  profileExperience(callback): any {
    this.axios.get(`${this.apiRoot}/v1/profile-experiences/`).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  profileExperienceCreate(callback, data): any {
    this.axios.post(`${this.apiRoot}/v1/profile-experiences/`, data).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  profileExperienceUpdate(callback, id, data): any {
    this.axios.patch(`${this.apiRoot}/v1/profile-experiences/${id}/`, data).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  profileExperienceDelete(callback, id): any {
    this.axios.delete(`${this.apiRoot}/v1/profile-experiences/${id}/`).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  experienceSearch(callback, query): any {
    this.axios.get(`${this.apiRoot}/v1/experiences/?name__icontains=${query}`).then((response) => {
      callback(response.data['results'])
    }).catch((error) => {
      printError(error);
    })
  }

  schoolSearch(callback, query): any {
    this.axios.get(`${this.apiRoot}/v1/schools/?name__icontains=${query}`).then((response) => {
      callback(response.data['results'])
    }).catch((error) => {
      printError(error);
    })
  }

  signupPictures(callback): any {
    this.axios.get(`${this.apiRoot}/v1/signup-pictures/`).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  signupPictureCreate(callback, data): any {
    this.axios.post(`${this.apiRoot}/v1/signup-pictures/`, data).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  signupPictureUpdate(callback, id, data): any {
    this.axios.patch(`${this.apiRoot}/v1/signup-pictures/${id}/`, data).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  signupPictureDelete(callback, id): any {
    this.axios.delete(`${this.apiRoot}/v1/signup-pictures/${id}/`).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  signupInterests(callback): any {
    this.axios.get(`${this.apiRoot}/v1/signup-interests/`).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  signupInterestCreate(callback, data): any {
    this.axios.post(`${this.apiRoot}/v1/signup-interests/`, data).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  signupInterestUpdate(callback, id, data): any {
    this.axios.patch(`${this.apiRoot}/v1/signup-interests/${id}/`, data).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  signupInterestDelete(callback, id): any {
    this.axios.delete(`${this.apiRoot}/v1/signup-interests/${id}/`).then((response) => {
      callback(response.data)
    }).catch((error) => {
      printError(error);
    })
  }

  genderSearch(callback, query): any {
    this.axios.get(`${this.apiRoot}/v1/genders/?name__icontains=${query}`).then((response) => {
      callback(response.data['results'])
    }).catch((error) => {
      printError(error);
    })
  }
}
