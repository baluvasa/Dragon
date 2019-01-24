import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.scss']
})
export class LeftmenuComponent implements OnInit {
logedas= localStorage.getItem('logeduser');
  constructor() { }
  // callmenu(){    
  //   this.logedas= localStorage.getItem('logeduser');
  // }
  ngOnInit() {
  //   $(document).ready(function(){

  //     $('#danger').click(function (e) {
  //       e.preventDefault()
  //       $('#message').html('<div class="alert alert-danger fade in"><button type="button" class="close close-alert" data-dismiss="alert" aria-hidden="true">×</button>This is a error message</div>');
  //     })
  // });
  
  }
  

}
