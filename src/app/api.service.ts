import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  constructor() { }

  ads = []
  adsLength = this.ads.length;

  createAd(ad){
    let newAd = ad
    //creating Id for new Ad    
    ++this.adsLength
    newAd.id = this.adsLength
    newAd.date = JSON.stringify(new Date())
    console.log(newAd)
    this.ads.push(newAd)
    
    console.log(this.ads)

  }

}
