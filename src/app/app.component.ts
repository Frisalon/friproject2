import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import {Storage} from "@ionic/storage";


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage:any = TabsPage;
  mybookings:any=[];

  constructor(public storage: Storage,platform: Platform) {
    if(window.localStorage.getItem('fistart')!='1'){
      //also show the slides else go to home
      window.localStorage.setItem('firststart','1');
      this.storage.set('fribookings',this.mybookings)
    }else{
      //load tabs page
      this.rootPage=TabsPage
    }
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
