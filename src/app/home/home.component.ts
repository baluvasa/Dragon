import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from  "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
results:any;
datas:any;
  constructor(private  httpClient:HttpClient) { }

  ngOnInit() {
    let ip='http://10.56.67.9:8082';
    let url=ip+'/po/resources/fetch';
    this.httpClient.get(url).subscribe(result => {
      console.log(result)
this.results=result;
this.datas=this.results.resources;  
    })
  }

}
