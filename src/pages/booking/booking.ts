import { Component } from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {Network} from "ionic-native";
import {Firebase} from '../../providers/firebase';
import { AlertController } from 'ionic-angular';
import {Storage} from "@ionic/storage";

/*
  Generated class for the Booking page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html'
})
export class BookingPage {
  data:any={};
  service:any;
  mybookings:any=[];
  public event = {
    month: '2016-12-01',
    timeStarts: '07:43'
  }
  constructor(public storage:Storage,public alertCtrl: AlertController,public toastCtrl:ToastController,public firebase:Firebase, public navCtrl: NavController) {
    this.data.fname="";
    this.data.lname="";
    this.data.email="";
    this.data.service="";
    this.data.nb="";
  }

  ionViewDidLoad() {
    console.log('Hello BookingPage Page');
  }
  booknow(){
    //check for null data
    if(this.data.fname.length==0&& this.data.lname==0&&this.data.email==0&&this.data.service==0){
      let toast = this.toastCtrl.create({
        message: 'You ommitted some fields',
        duration: 300
      });
      toast.present();
      return;
    }
    if(Network.connection=='none'){
      let toast = this.toastCtrl.create({
        message: 'No internet connection',
        duration: 3000
      });
      toast.present();
      return;
    }
    var newbooking={
      fname: this.data.fname,
      lname: this.data.lname,
      email: this.data.email,
      service: this.data.service,
      month: this.event.month,
      time: this.event.timeStarts,
      nb: this.data.nb
    }

    this.storage.get('fribookings').then(
      data=>{
        this.mybookings=data;
        this.mybookings.push(newbooking);
        this.storage.set('fribookings',this.mybookings)
      },
      err=>{

      }
    );

    this.firebase.addReservation(this.data.fname,this.data.lname,this.data.email,this.data.service,this.event.month,this.event.timeStarts,this.data.nb).subscribe(
      data => {
        console.log("Data submitted sucessfully");
        let alert = this.alertCtrl.create({
          title: 'Booking!',
          subTitle: 'Your booking has been submitted successfully!',
          buttons: ['OK']
        });
        alert.present();
      },
      err => {
        let alert = this.alertCtrl.create({
          title: 'Booking!',
          subTitle: 'Your booking could not be submitted! Try again.',
          buttons: ['OK']
        });
        alert.present();
        console.log(err);
        console.log("Data not submitted");
      }
    );

  }

}
