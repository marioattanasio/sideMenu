import { Component, OnInit } from '@angular/core';

import {  MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

import { AuthenticationService } from './../services/authentication.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  private email;
  private password;
  constructor(public menu: MenuController,private router: Router, private authService: AuthenticationService) {}

  
  ngOnInit() {
  }


 /*ionViewWillEnter() {
    this.menu.enable(false);
   }

  goAnOtherPage(){
    this.router.navigate(['/menu']);
   }*/

   login() {
    
    this.authService.setUser(this.email,this.password);
    let user =this.authService.getUser();
    console.log(user);
    this.authService.login(user);
  }


}
