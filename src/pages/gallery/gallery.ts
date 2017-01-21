import { Component } from '@angular/core';
import {NavController, ActionSheetController, ModalController, NavParams} from 'ionic-angular';
import {PicPage} from "../../modal/pic/pic";
import {HomePage} from "../../pages/home/home";
import {Storage} from "@ionic/storage";
import { PhotoViewer } from 'ionic-native';


/*
  Generated class for the Gallery page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})
export class GalleryPage {
  pictures:any;
  images: any = {};
  theImage: string;
  constructor(public navCtrl: NavController,
              public storage: Storage,
              public actionSheetCtrl: ActionSheetController,
              public modalCtrl: ModalController, public navParams:NavParams) {
    this.pictures=this.navParams.get('image');
    this.images = {};
    this.images.imagesArr = [];

    this.storage.get('tabsApp.images').then((value: any) => {

      if (!value) {
        this.storage.set('tabsApp.images', {
          count: 1,
          imagesArr: []
        });
      } else {
        this.images = value;
      }

    });

  }

  ionViewDidLoad() {
    console.log('Hello GalleryPage Page');
  }

  openFullSizeImg(image) {
    //file://assets/chime.
    var url="file://"+image;
    console.log(url);
    PhotoViewer.show(url, '', {share: false});
  }

}
