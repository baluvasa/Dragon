import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net'
@Component({
  selector: 'app-projectinfo',
  templateUrl: './projectinfo.component.html',
  styleUrls: ['./projectinfo.component.scss']
})
export class ProjectinfoComponent implements OnInit {
  constructor() { }

  ngOnInit() {

      (<any> $('#example')).DataTable({
        dom: 'Bfrtip',
              'paging'      : true,
              'lengthChange': false,
              'searching'   : true,
              'ordering'    : true,
              'info'        : true,
              'autoWidth'   : true,
              'scrollX'     : true,
               scrollY : '50vh',
               scrollCollapse: true,
              /*fixedColumns:   true,*/
               fixedHeader: {
                    header: false,
                    footer: true
               },
               lengthMenu: [
                    [ 10, 20, 50, -1 ],
                    [ '10 rows', '20 rows', '50 rows', 'Show all' ]
                ],
                buttons: [
                    { extend: 'pageLength',class:'page_length'},
                    { extend: 'colvis', text: 'Show/Hide Column'},
                    { extend: 'excel', text: 'Export To Excel' },
                ]
      });
  }

}
