import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  ads = [
    {
      title: "sell wegan",
      description: "wanna sell one stupid wegan",
      author: "meat eater",
      created_at: "12.12.1234"
    },
    {
      title: "free cows",
      description: "wanna free all cows",
      author: "wegan",
      created_at: "13.12.1234"
    },
    {
      title: "need rifle",
      description: "wanna buy rifle to shoot idiots",
      author: "misantrope",
      created_at: "06.06.1234"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
