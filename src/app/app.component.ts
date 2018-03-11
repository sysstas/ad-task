import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{
 
  constructor(private authServise: AuthService){} 
  
  ngOnInit(){}
  
  
  
}

