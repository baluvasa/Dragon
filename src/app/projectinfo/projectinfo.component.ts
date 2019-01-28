import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-projectinfo',
  templateUrl: './projectinfo.component.html',
  styleUrls: ['./projectinfo.component.scss']
})
export class ProjectinfoComponent implements OnInit {
  projectslists:any;
  constructor() { }
  dtOptions: any = {};
  ngOnInit() {
    
    this.projectslists=[
      {name:'Cara Stevens',position:'Sales Assistant',office:'New York',age:'46',start_date:'2011/12/06',salary:'$145,600'},
      {name:'Donna Snider',position:'Customer Support',office:'New York',age:'27',start_date:'2011/01/25',salary:'$112,000'},
      {name:'Hermione Butler',position:'Regional Director',office:'London',age:'47',start_date:'2011/03/21',salary:'$356,250'},
      {name:'Jennifer Acosta',position:'Junior Javascript Developer',office:'Edinburgh',age:'43',start_date:'2013/02/01',salary:'$75,650'},
      {name:'Jonas Alexander',position:'Developer',office:'San Francisco',age:'30',start_date:'2010/07/14',salary:'$86,500'},
      {name:'Lael Greer',position:'Systems Administrator',office:'London',age:'21',start_date:'2009/02/27',salary:'$103,500'},
      {name:'Michael Bruce',position:'Javascript Developer',office:'Singapore',age:'29',start_date:'2011/06/27',salary:'$183,000'},
      {name:'Shad Decker',position:'Regional Director',office:'Edinburgh',age:'51',start_date:'2008/11/13',salary:'$183,000'},
      {name:'Cara Stevens',position:'Sales Assistant',office:'New York',age:'46',start_date:'2011/12/06',salary:'$145,600'},
      {name:'Donna Snider',position:'Customer Support',office:'New York',age:'27',start_date:'2011/01/25',salary:'$112,000'},
      {name:'Hermione Butler',position:'Regional Director',office:'London',age:'47',start_date:'2011/03/21',salary:'$356,250'},
      {name:'Jennifer Acosta',position:'Junior Javascript Developer',office:'Edinburgh',age:'43',start_date:'2013/02/01',salary:'$75,650'},
      {name:'Jonas Alexander',position:'Developer',office:'San Francisco',age:'30',start_date:'2010/07/14',salary:'$86,500'},
      {name:'Lael Greer',position:'Systems Administrator',office:'London',age:'21',start_date:'2009/02/27',salary:'$103,500'},
      {name:'Michael Bruce',position:'Javascript Developer',office:'Singapore',age:'29',start_date:'2011/06/27',salary:'$183,000'},
      {name:'Shad Decker',position:'Regional Director',office:'Edinburgh',age:'51',start_date:'2008/11/13',salary:'$183,000'},
      {name:'Cara Stevens',position:'Sales Assistant',office:'New York',age:'46',start_date:'2011/12/06',salary:'$145,600'},
      {name:'Donna Snider',position:'Customer Support',office:'New York',age:'27',start_date:'2011/01/25',salary:'$112,000'},
      {name:'Hermione Butler',position:'Regional Director',office:'London',age:'47',start_date:'2011/03/21',salary:'$356,250'},
      {name:'Jennifer Acosta',position:'Junior Javascript Developer',office:'Edinburgh',age:'43',start_date:'2013/02/01',salary:'$75,650'},
      {name:'Jonas Alexander',position:'Developer',office:'San Francisco',age:'30',start_date:'2010/07/14',salary:'$86,500'},
      {name:'Lael Greer',position:'Systems Administrator',office:'London',age:'21',start_date:'2009/02/27',salary:'$103,500'},
      {name:'Michael Bruce',position:'Javascript Developer',office:'Singapore',age:'29',start_date:'2011/06/27',salary:'$183,000'},
      {name:'Shad Decker',position:'Regional Director',office:'Edinburgh',age:'51',start_date:'2008/11/13',salary:'$183,000'},
      {name:'Cara Stevens',position:'Sales Assistant',office:'New York',age:'46',start_date:'2011/12/06',salary:'$145,600'},
      {name:'Donna Snider',position:'Customer Support',office:'New York',age:'27',start_date:'2011/01/25',salary:'$112,000'},
      {name:'Hermione Butler',position:'Regional Director',office:'London',age:'47',start_date:'2011/03/21',salary:'$356,250'},
      {name:'Jennifer Acosta',position:'Junior Javascript Developer',office:'Edinburgh',age:'43',start_date:'2013/02/01',salary:'$75,650'},
      {name:'Jonas Alexander',position:'Developer',office:'San Francisco',age:'30',start_date:'2010/07/14',salary:'$86,500'},
      {name:'Lael Greer',position:'Systems Administrator',office:'London',age:'21',start_date:'2009/02/27',salary:'$103,500'},
      {name:'Michael Bruce',position:'Javascript Developer',office:'Singapore',age:'29',start_date:'2011/06/27',salary:'$183,000'},
      {name:'Shad Decker',position:'Regional Director',office:'Edinburgh',age:'51',start_date:'2008/11/13',salary:'$183,000'},
    ];   

    this.dtOptions = {
    //   data: this.projectslists,
    //   columns: [{
    //     title: 'Name',
    //     data: 'name'
    //   }, {
    //     title: 'Position',
    //     data: 'position'
    //   }, {
    //     title: 'Office',
    //     data: 'office'
    //   }
    //   , {
    //     title: 'Age',
    //     data: 'age'
    //   }
    //   , {
    //     title: 'Start Date',
    //     data: 'start_date'
    //   }
    //   , {
    //     title: 'Salary',
    //     data: 'salary'
    //   }
    // ],
      // Declare the use of the extension in the dom parameter
      dom: 'Bfrtip',
      lengthMenu: [
          [ 10, 25, 50, -1 ],
          [ '10 rows', '25 rows', '50 rows', 'Show all' ]
      ],
      pagingType: 'full_numbers',
      buttons: [
        'pageLength',
        'colvis',
        'excel'
      ]
    };
    }
  
}
