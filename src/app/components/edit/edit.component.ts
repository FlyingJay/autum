import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@app/services/data.service';
import { environment } from '@env/environment';
import { ktdTrackById } from '@katoid/angular-grid-layout';
import { API } from '@app/services/api.service';
import { CropperComponent } from '@app/components/cropper/cropper.component';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ModalController } from '@ionic/angular';
import { PickerController } from "@ionic/angular";
import { PickerOptions } from "@ionic/core";
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditPageComponent implements OnInit {
 heights: string[] = ["None (select your height)", "3' 0 (92 cm)", "3' 1 (94 cm)", "3' 2 (97 cm)", "3' 3 (102 cm)", "3' 4 (102 cm)", "3' 5 (104 cm)",
    "3' 6 (107 cm)", "3' 7 (109 cm)", "3' 8 (112 cm)", "3' 9 (117 cm)", "3' 10 (117 cm)", "3' 11 (119cm)",
    "4' 0 (122 cm)", "4' 1 (124 cm)", "4' 2 (127 cm)", "4' 3 (130 cm)", "4' 4 (132 cm)", "4' 5 (135 cm)",
    "4' 6 (137 cm)","4' 7 (140 cm)", "4' 8 (142 cm)", "4' 9 (145 cm)", "4' 10 (147 cm)",
    "4' 11 (150 cm)","5' 0 (152 cm)", "5' 1 (155 cm)", "5' 2 (157 cm)", "5' 3 (160 cm)", "5' 4 (163 cm)",
    "5' 5 (165 cm)", "5' 6 (168 cm)","5' 7 (170 cm)", "5' 8 (173 cm)", "5' 9 (175 cm)", "5' 10 (178 cm)", "5' 11 (180 cm)", "6' 0 (183 cm)",
    "6' 1 (185 cm)", "6' 2 (188 cm)", "6' 3 (191 cm)", "6' 4 (193 cm)", "6' 5 (196 cm)",
    "6' 6 (198 cm)", "6' 7 (201 cm)", "6' 8 (203 cm)", "6' 9 (206 cm)", "6' 10 (208 cm)", "6' 11 (211 cm)", "7' 0 (213 cm)" ];
 heights_inches: number[] = [ null, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
    53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
    76, 77, 78, 79, 80, 81, 82, 83, 84];

  @Output() refreshUser = new EventEmitter();
  @Input('user') user: any;

  view:any
  segmentButton: any = 'flame';
  imageData: any;
  cols: number = 3;
  rowHeight: number = screen.width < 360 ? 175 : 225;
  pageLoaded=false;
  layout = [];
  pictures = [];
  segmentChanged(ev: any){
  }
  cacheLayout=null;
  trackById = ktdTrackById;
  bio = '';
  job = '';
  company = '';
  ageUser=' ';
  school= '';
  interests = [];
  experiences= [];
  genders = [];
  orientation = null;
  height = 0;
  gradient = 'Neutral';
  isUploading = false;
  isLoading = true;
  isDeleting = [];


  gradients: any;
  objectKeys = Object.keys
  backbutton:any;

  imageChangedEvent: any = '';

  constructor(public platform: Platform, private pickerController: PickerController, public serviceProvider: DataService,public route: Router, public modalCtrl: ModalController, public api: API) {
    this.gradients = environment.gradients
  }

  async showPicker() {
    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: 'cancel',
        },
        {
          text:'OK',
          handler:(response:any) => {
            this.height = response['Height'].value
            this.updateHeight()
          }
        }
      ],
      columns:[{
        name:'Height',
        options:this.getColumnOptions()
      }]
    };

    let picker = await this.pickerController.create(options);
    picker.columns[0].selectedIndex = 25;
    picker.present()
  }

  getColumnOptions(){
      let options = [];
      for (let i=0;i<this.heights.length;i++) {
        options.push({
          text: this.heights[i],
          value: this.heights_inches[i]
        });
      }
      return options;
    }

  updateHeight(){
    this.api.profileUpdate((user) => {
      this.refreshUser.next()
    },
    localStorage.getItem('user'),
    { height: this.height })
  }

  updateBio(){
    this.api.profileUpdate((user) => {},
    localStorage.getItem('user'),
    { description: this.bio })
  }

  updateJob(){
    this.api.profileUpdate((user) => {},
    localStorage.getItem('user'),
    { job: this.job })
  }

  updateCompany(){
    this.api.profileUpdate((user) => {},
    localStorage.getItem('user'),
    { company: this.company })
  }

  updateGradient(key){
    this.gradient = key
    this.api.profileUpdate((user) => {},
    localStorage.getItem('user'),
    { gradient: key })
  }

  deletePicture(i) {
    this.isDeleting[i] = true;

    this.api.profilePictureDelete(() => {
      this.refreshUser.next()
      this.isDeleting[i] = false;
    }, this.pictures[i].id)
  }

  sameWithTrim(a, b) {
    return a.trim() === b
  }

  keepTrailingSpace(inputValue, dbValue) {
    if (inputValue?.trim() === dbValue) {
      return inputValue
    }
    return dbValue
  }

  ngOnChanges() {
    if (this.user) {
      this.bio = this.keepTrailingSpace(this.bio, this.user.description)
      this.job = this.keepTrailingSpace(this.job, this.user.job)
      this.company = this.keepTrailingSpace(this.company, this.user.company)
      this.school = this.keepTrailingSpace(this.school, this.user.school ? this.user.school.name : "Select school..")
      this.interests = this.user.interests
      this.experiences = this.user.experiences
      this.pictures = this.user.pictures
      this.orientation = this.user.orientation
      this.gradient = this.user.gradient || 'Neutral'
      this.height = this.user.height
      this.layout = []
      let j = 0;
      this.layout = this.pictures.map((picture, i) => i%3 == 2 ? {id:''+picture.id, x:i%3, y:j++, w:1, h:1} : {id:''+picture.id, x:i%3, y:j, w:1, h:1})
      this.layout = this.layout.concat(this.layout.length < 6 ? [{id:'create', x:this.pictures.length%3, y:j, w:1, h:1}] : [])

      this.isLoading = false;
      this.isUploading = false
      this.isDeleting = this.pictures.map(() => false)
    } else {
      this.isLoading = true;
    }
  }

  goToPage(page) {
    this.route.navigate([page]);
  }

  ngOnInit() {
    this.isLoading = true
  }

  onLayoutUpdated(event){
    let isOutOfBounds=false
    event.forEach(tile => {
      if (tile.y>2) {
        isOutOfBounds=true
        this.layout= this.cacheLayout
      }
    })

    if(!isOutOfBounds){
      this.layout = []
      event.forEach(tile => {
        this.layout.push(tile)
      })

      event.forEach(tile => {
        if (tile.id != 'create') {
          this.api.profilePictureUpdate(() => {
            this.refreshUser.next()
          }, tile.id, {
            position: tile.x + tile.y*3
          })
        }
      })
    }
  }

  onDragStarted(){
    this.cacheLayout = []
    this.layout.forEach(item => {
      this.cacheLayout.push(item)
    })
  }

  gotoProfilePreviewPage() {
    this.route.navigate(['profile-preview']);
  }

  async fileChangeEvent(event: any, index: number) {
      this.isUploading = true
      this.backbutton = this.platform.backButton.observers.pop();

      const modal = await this.modalCtrl.create({
        component: CropperComponent,
        componentProps: {
          imageChangedEvent: event,

        }
      });

      modal.onDidDismiss().then((data) => {
        if (data?.data?.base64) {
          this.api.profilePictureCreate(() => {
            this.isUploading = false;
            this.refreshUser.next()
          }, {
            profile: localStorage.getItem('user'),
            picture: data.data.base64,
            position: index

          })
        }
      });
      return await modal.present();
  }
}
