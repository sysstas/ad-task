import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class ApiService {

  constructor(private authService: AuthService) { }

  ads = []
  
  storedAds = JSON.parse(localStorage.getItem("ads"))
  
  createAd(ad){
    let newAd = ad
    //creating Created_at for new Ad   
    newAd.created_at = new Date()
    //creating Id for new Ad 
    newAd.id = JSON.stringify(newAd.created_at)
    //creating Author for new Ad 
    newAd.author = this.authService.loggedUser
    // pushing new element to array of ads
    if (this.storedAds) {
      this.ads = this.storedAds
      console.log("ads here")
      this.storedAds.push(newAd)
    } 

    this.ads.push(newAd)
  
    
    
    // Saving ads in LocalStorage
    localStorage.setItem("ads", JSON.stringify(this.ads))

    console.log(this.ads)
    console.log(this.storedAds)

  }

}
