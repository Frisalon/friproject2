import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { PicPage } from '../../modal/pic/pic';
import { NavController } from 'ionic-angular';
import {BookingPage} from "../booking/booking";
import {GalleryPage} from "../gallery/gallery";
import {Storage} from "@ionic/storage";
import {Firebase} from "../../providers/firebase";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  styles:any;
  mybookings:any=[];
  hasbooking:boolean=false;
  constructor(public firebase:Firebase,public storage:Storage,public navCtrl: NavController, public modalCtrl:ModalController) {

    //handling display of reservations
    this.storage.get('fribookings').then(
      data=>{
        if(data.length>0) {
          this.hasbooking = true;
          this.mybookings = data;

          for (var i = 0; i < this.mybookings.length; i++) {
            this.firebase.getReservation().subscribe(
              data => {
                this.mybookings[i].status = data.Status
              }
            );
          }
        }
        else{
          this.hasbooking=false;
        }
      },err=>{

      }
    );
    //end


    this.styles=[
      {"id":"0", "thumbnail_pic":"assets/sample1.jpg", "sample_pics": ["img/sample.jpg","img/sample.jpg","img/sample.jpg"]},
      {"id":"1", "thumbnail_pic":"assets/sample2.jpg", "sample_pics": ["img/try.png","img/try.png","img/try.png"]},
      {"id":"2", "thumbnail_pic":"assets/sample3.jpg", "sample_pics": ["img/new.jpg","img/new.jpg","img/new.jpg"]},
      {"id":"3", "thumbnail_pic":"assets/sample1.jpg", "sample_pics": ["img/sample.jpg","img/sample.jpg","img/sample.jpg"]}
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
