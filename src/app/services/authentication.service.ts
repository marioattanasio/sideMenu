import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';

import { HttpClient, HttpHeaders} from '@angular/common/http';



const TOKEN_KEY = 'auth-token';
const AUTH_API = 'http://localhost:8000/api/users';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  private user =  {
     email : String,
    password : String
  }
 
  authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage, private plt: Platform, private http: HttpClient) { 
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

 public setUser(email,password) {
    this.user.email = email;
    this.user.password = password;
    
  }
 
  getUser() {
    return this.user;
  }
 
  checkToken() {
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    })
    
  }
 

   login(user) {
   this.http.post('http://localhost:8000/api/users/login', {user})
    .subscribe(data => {
      //console.log(data.user.token);
      this.authenticationState.next(true);
      //this.storage.set(TOKEN_KEY, data.user.token)
    }, error => {
      console.log(error);
    });

    /*return this.http.post('http://localhost:8000/api/users/login',
    //  return this.http.post(AUTH_API + 'menu/page1',
      {email: "email", password: "pass"},
     // user1,
    //  httpOptions
    ).pipe(
      tap(token => {
        
        this.storage.set(TOKEN_KEY, token)
        .then(
          () => {
            console.log('Token Stored');
          },
          error => console.error('Error storing item', error)
        );
      // this.TOKEN_KEY = token;
      // this.isLoggedIn = true;
      // this.authenticationState.next(true);
      // return token;
      return this.storage.set(TOKEN_KEY, token).then(() => {
        this.authenticationState.next(true);
      });
      }),
    );*/
  } 
 
/*  login() {
    return this.storage.set(TOKEN_KEY, 'Bearer 1234567').then(() => {
      this.authenticationState.next(true);
    });
  }*/
 
  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }
 
  isAuthenticated() {
    return this.authenticationState.value;
  }
 
}