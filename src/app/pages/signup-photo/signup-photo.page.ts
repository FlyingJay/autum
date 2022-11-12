
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '@app/services/data.service';
import { environment } from '@env/environment';
import { ktdTrackById } from '@katoid/angular-grid-layout';
import { API } from '@app/services/api.service';
import { CropperComponent } from '@app/components/cropper/cropper.component';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-signup-photo',
  templateUrl: './signup-photo.page.html',
  styleUrls: ['./signup-photo.page.scss'],
})
export class SignUpPhotoPageComponent implements OnInit {
  data: any;
  imageData: any;
  cols: number = 3;
  rowHeight: number = screen.width < 360 ? 175 : 225;
  pageloaded=false;
  layout = [
      {id: '0', x: 0, y: 0, w: 1, h: 1},
      {id: '1', x: 1, y: 0, w: 1, h: 1},
  ];

  @Output() refreshUser = new EventEmitter();
  @Input('user') user: any;
  cacheLayout=null
  trackById = ktdTrackById


  bio = ''
  job = ''
  company = ''
  school = ''
  interests = []
  signup: any;
  pictures = [];
  isUploading = [false, false];
  isLoading = true;
  isDeleting = [];

  constructor(public serviceProvider: DataService,public route: Router, public activeRoute: ActivatedRoute, public api: API, public modalCtrl: ModalController) {
    this.activeRoute.params.subscribe((params) => {
      this.signup = params.signup
      this.loadData()
    });
    //this.data = environment.editInfo;
    //this.imageData = environment.images;
  }

  loadData(){
    this.api.signup((signup) => {
      this.pictures = signup.pictures

      this.layout = []
      let j = 0;
      this.layout = this.pictures.map((picture, i) => i%3 == 2 ? {id:''+picture.id, x:i%3, y:j++, w:1, h:1} : {id:''+picture.id, x:i%3, y:j, w:1, h:1})
      this.layout = this.layout.concat(this.layout.length < 2
                                        ? this.layout.length == 0
                                          ? [{id:'create', x:0, y:0, w:1, h:1}, {id:'create2', x:1, y:0, w:1, h:1}]
                                          : [{id:'create', x:this.pictures.length%3, y:j, w:1, h:1}]
                                        : [])
    }, this.signup);
  }

/*  createPicture(event, i) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (_event: any) => {
        this.api.signupPictureCreate(() => {
          this.loadData()
        }, {
          signup: this.signup,
          picture: _event.target.result,
          position: i
        })
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }*/

   async createPicture(event: any, index: number) {
          this.isUploading[index] = true
          const modal = await this.modalCtrl.create({
            component: CropperComponent,
            componentProps: {
              imageChangedEvent: event
            }
          });

          modal.onDidDismiss().then((data) => {
            if (data?.data?.base64) {
              this.api.signupPictureCreate(() => {
                this.isUploading[index] = false
                this.loadData()
              }, {
                picture: data.data.base64,
                position: index,
                signup:this.signup
              })
            }
          });

          return await modal.present();
      }

  deletePicture(i) {
   this.isDeleting[i] = true;
    this.api.signupPictureDelete(() => {
      this.loadData();
       this.isDeleting[i] = false;
    }, this.pictures[i].id)
  }

 ngOnChanges() {
    if (this.user) {
      this.layout = []
      this.isLoading = false;
      this.isUploading = [false, false]
      this.pictures = this.user.pictures
      this.isDeleting = this.pictures.map(() => false)
    } else {
      this.isLoading = true;
    }
  }

  goToPage(page) {
    this.route.navigate([page]);
  }

  ionViewWillEnter() {
    this.loadData();
  }

  ngOnInit() {
    this.isLoading = true
  }

  onLayoutUpdated(event){
    let isOutOfBounds=false
    event.forEach((item) => {
      if (item.y>2) {
        isOutOfBounds=true
        this.layout= this.cacheLayout
      }
    })

    if(!isOutOfBounds){
      this.layout = []
      event.forEach(item => {
        this.layout.push(item)
      })
    }
  }

  onDragStarted(){
    this.cacheLayout = []
    this.layout.forEach(item => {
      this.cacheLayout.push(item)
    })
  }

  verifyPhoto() {
    this.route.navigate(['signup-interest', { signup: this.signup }]);
  }

  ionViewDidEnter() {
    console.log('ngOnInit');
    this.pageloaded=true;
  }


}
