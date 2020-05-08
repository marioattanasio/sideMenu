import { Component, OnInit } from '@angular/core';

import {  MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public menu: MenuController,private router: Router) {}

  ngOnInit() {
  }


 /* ionViewWillEnter() {
    this.menu.enable(false);
   }*/

   goAnOtherPage(){
 this.router.navigate(['/menu']);

   }


}
