import { Component } from '@angular/core';
import {NavController, ModalController, ViewController, NavParams} from 'ionic-angular';


/*
  Generated class for the Pic page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pic',
  templateUrl: 'pic.html'
})
export class PicPage {
  image:any;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public viewCtrl:ViewController, public navParams:NavParams) {
    this.image = navParams.get('image');
  }

  ionViewDidLoad() {
    console.log('Hello PicPage Page');
  }
  dismiss(){
    this.viewCtrl.dismiss()
  }

}
