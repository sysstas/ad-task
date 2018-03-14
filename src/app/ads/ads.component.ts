import { Component, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent{

  constructor( private apiService: ApiService, private authService: AuthService) { }


  displayedColumns = ['title', 'author', 'created_at', 'description'];
  dataSource = new MatTableDataSource<any>(this.apiService.storedAds);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}


