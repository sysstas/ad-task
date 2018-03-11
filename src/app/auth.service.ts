import { Injectable } from '@angular/core';


@Injectable()
export class AuthService {

  
  constructor( ) {}

   public isLogin = false;

  RegisterUser(RegData) {
    var currentUser = JSON.stringify({ username: RegData.username, password: RegData.pwd })   
    localStorage.setItem("currentUser", currentUser)       
  }

  LoginUser(loginData) { 
    let storedUser = JSON.parse(localStorage.getItem("currentUser")).username;
    let storedPwd = JSON.parse(localStorage.getItem("currentUser")).password;
    
    if (loginData.username !== storedUser || loginData.pwd !== storedPwd) {
      console.log("acess denied")
      console.log(this.isLogin)     
    } else {
      console.log("access granted")
      this.isLogin = true
      console.log(this.isLogin) 
      //this.loggedUser = storedUser;     
    }
    //console.log(this.loggedUser)      
  }


}
