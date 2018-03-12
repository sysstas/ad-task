import { Injectable } from '@angular/core';


@Injectable()
export class AuthService {

  
  constructor( ) {}

   isLogin = false;
   loggedUser = false

  RegisterUser(RegData) {
    var currentUser = JSON.stringify({ username: RegData.username, password: RegData.pwd })   
    
    localStorage.setItem("currentUser", currentUser)
    this.isLogin = true 
    this.loggedUser = RegData.username  
  }

  LoginUser(loginData) { 
    let storedUser = JSON.parse(localStorage.getItem("currentUser")).username;
    let storedPwd = JSON.parse(localStorage.getItem("currentUser")).password;
    
    if (loginData.username !== storedUser || loginData.pwd !== storedPwd) {
      console.log("acess denied")  
    } else {
      console.log("access granted")
      this.isLogin = true  
      this.loggedUser = loginData.username    
    }       
  }

  Logout(){
    this.isLogin = false
    this.loggedUser = false
  }

}
