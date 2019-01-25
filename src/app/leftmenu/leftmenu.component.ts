import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.scss']
})
export class LeftmenuComponent implements OnInit {
logedas= localStorage.getItem('logeduser');
  constructor() { }
  ngOnInit() {}
}
