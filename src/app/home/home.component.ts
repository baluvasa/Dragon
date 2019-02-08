import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from  "@angular/common/http";
import { AppLink } from '../app-link';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
results:any;
datas:any;
ip:string;
  constructor(private  httpClient:HttpClient) { }

  ngOnInit() {
    this.ip=AppLink.baseURL;
    let url=this.ip+'/po/resources/fetch';
    this.httpClient.get(url).subscribe(result => {
      console.log(result)
this.results=result;
this.datas=this.results.resources;  
    })
  }

}
