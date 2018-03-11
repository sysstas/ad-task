import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.css']
})
export class CreateAdComponent implements OnInit {

  ad = {}

  post(ad){
    this.apiService.createAd(ad)
  }
  
  constructor( private apiService: ApiService) { }

  ngOnInit() {
  }

}
