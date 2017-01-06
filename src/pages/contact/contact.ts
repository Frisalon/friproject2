import { Component } from '@angular/core';

import {NavController, Platform} from 'ionic-angular';
import {GoogleMapsLatLng, GoogleMap, GoogleMapsEvent} from "ionic-native";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public platform:Platform) {
    platform.ready().then(() => {
       let friSalon: GoogleMapsLatLng = new GoogleMapsLatLng(41.1115392,20.80440134);

        let opt = {
          'backgroundColor': 'white',
          'controls': {
            'compass': true,
            'myLocationButton': true,
            'indoorPicker': true,
            'zoom': true
          },
          'gestures': {
            'scroll': true,
            'tilt': true,
            'rotate': true,
            'zoom': true
          },
          'camera': {
            'latLng': friSalon,
            'zoom': 14
          }
        };

        let map = new GoogleMap('map', opt);

        map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {

          map.addMarker({
            'position': friSalon,
            'title': "Hello GoogleMap for Cordova!"
          }).then(function (data) {
            console.log('MARKER IS SHOWN');
          });

          console.log('MAP READY');
        });
      });


    }

}
