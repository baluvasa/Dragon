import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
// import $ from 'jquery';
=======
import * as $ from 'jquery';
import 'datatables.net'
<<<<<<< HEAD
import 'datatables.net-dt'
import 'datatables.net-bs'

=======
>>>>>>> 2b62e551bd316e436fdc403c4cb39461bb964bf3
>>>>>>> c4f226ef5b7274ba8c772624663384562b229c7d
@Component({
  selector: 'app-projectinfo',
  templateUrl: './projectinfo.component.html',
  styleUrls: ['./projectinfo.component.scss']
})
export class ProjectinfoComponent implements OnInit {
<<<<<<< HEAD
  // DataTable: any;
=======
>>>>>>> 2b62e551bd316e436fdc403c4cb39461bb964bf3
  constructor() { }

  ngOnInit() {

<<<<<<< HEAD
    $(document).ready(function() {
      (<any>$('#example')).DataTable();
  } );
=======
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
>>>>>>> 2b62e551bd316e436fdc403c4cb39461bb964bf3
  }

}
