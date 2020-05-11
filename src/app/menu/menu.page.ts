import { Component, OnInit } from '@angular/core';


import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {MenuController} from '@ionic/angular';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(  
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuCtrl: MenuController,
    private router: Router) { }



 public selectedIndex = 0;
  public appPages = [
    {
      title: 'Page 1',
      url: '/menu/page1',
      icon: 'mail'
    },
    {
      title: 'Page 2',
      url: '/menu/page2',
      icon: 'paper-plane'
    },
  
  ];


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }



  ngOnInit() {
    const path = window.location.pathname.split('menu/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
     
    }
  
     
    
  }
}
