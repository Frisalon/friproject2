import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { PicPage } from '../../modal/pic/pic';
import { NavController } from 'ionic-angular';
import {BookingPage} from "../booking/booking";
import {GalleryPage} from "../gallery/gallery";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  styles:any;
  constructor(public navCtrl: NavController, public modalCtrl:ModalController) {
    this.styles=[
      {"id":"0", "thumbnail_pic":"img/new.jpg", "sample_pics": ["img/sample.jpg","img/sample.jpg","img/sample.jpg"]},
      {"id":"1", "thumbnail_pic":"img/new.jpg", "sample_pics": ["img/try.png","img/try.png","img/try.png"]},
      {"id":"2", "thumbnail_pic":"img/new.jpg", "sample_pics": ["img/new.jpg","img/new.jpg","img/new.jpg"]},
      {"id":"3", "thumbnail_pic":"img/new.jpg", "sample_pics": ["img/sample.jpg","img/sample.jpg","img/sample.jpg"]}
      ];
  }
  showImage(id) {
    this.navCtrl.push(GalleryPage,{
      image: this.styles[id].sample_pics
    })
    /*let modal = this.modalCtrl.create(PicPage,{
      image:this.styles[id].sample_pics
    });
    modal.present();*/
  }
  booknow(){
    this.navCtrl.push(BookingPage);
  }

}
