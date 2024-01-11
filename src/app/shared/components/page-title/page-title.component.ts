import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit{
  pagePath:any=''

  constructor(private _activateRoute:ActivatedRoute){}
  
  ngOnInit(): void {
    this.pagePath=this._activateRoute.snapshot.routeConfig?.path
    console.log(this.pagePath)
  }
}
