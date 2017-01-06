import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {BookingPage} from "../pages/booking/booking";
import {PicPage} from "../modal/pic/pic";
import {GalleryPage} from "../pages/gallery/gallery";
import {Storage} from "@ionic/storage";
import {Firebase} from "../providers/firebase";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BookingPage,
    PicPage,
    GalleryPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BookingPage,
    PicPage,
    GalleryPage
  ],
  providers: [Storage,Firebase]
})
export class AppModule {}
