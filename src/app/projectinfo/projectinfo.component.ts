import { Component, OnInit } from '@angular/core';
// import $ from 'jquery';
@Component({
  selector: 'app-projectinfo',
  templateUrl: './projectinfo.component.html',
  styleUrls: ['./projectinfo.component.scss']
})
export class ProjectinfoComponent implements OnInit {
  // DataTable: any;
  constructor() { }

  ngOnInit() {

    $(document).ready(function() {
      (<any>$('#example')).DataTable();
  } );
  }

}
