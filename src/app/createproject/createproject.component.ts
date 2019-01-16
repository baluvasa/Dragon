import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl  } from '@angular/forms';
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.scss'],
  styles: [`
  .custom-day {
    text-align: center;
    padding: 0.185rem 0.25rem;
    display: inline-block;
    height: 2rem;
    width: 2rem;
  }
  .custom-day.focused {
    background-color: #e6e6e6;
  }
  .custom-day.range, .custom-day:hover {
    background-color: rgb(2, 117, 216);
    color: white;
  }
  .custom-day.faded {
    background-color: rgba(2, 117, 216, 0.5);
  }
`]
})
export class CreateprojectComponent implements OnInit {
  angForm: FormGroup;
  angFormdays: FormGroup;
  submitted = false;
  clients = [
    {name: 'Arizona', abbrev: 'AZ'},
    {name: 'California', abbrev: 'CA'},
    {name: 'Colorado', abbrev: 'CO'},
    {name: 'New York', abbrev: 'NY'},
    {name: 'Pennsylvania', abbrev: 'PA'},
  ];
  hoveredDate: NgbDate;
  fromDate: NgbDate;
  toDate: NgbDate;
  datefields:any;
  fristfromdata:any;
  crateprojectdata:any;
  projectintialdata:any;
  constructor(private formBuilder: FormBuilder,private calendar: NgbCalendar) {
   
   }
   onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {      
    this.datefields=false;
      this.toDate = null;
      this.fromDate = date;
    }
    if(this.fromDate && this.toDate)
    {    
      this.datefields=true;     
    }
  }
  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }
  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }
  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }
  ngOnInit() {
    this.fristfromdata=false;
    this.datefields=false;
    this.angForm = new FormGroup({
      projectName:new FormControl('',{
        validators: [Validators.required,<any>Validators.minLength(4)],
        updateOn:'blur'
      }),
      ProjectClient:new FormControl('',{
        validators: [Validators.required]
      }),
      associates:new FormControl('',{
        validators: [Validators.required],
        updateOn:'blur'
      })
    }) 
    this.angFormdays = new FormGroup({
      daysformonth:new FormControl('',{
        validators: [Validators.required]
      })
    }    
  );
 
//jQuery time
let current_fs:any, next_fs:any, previous_fs:any; //fieldsets
let left, opacity, scale; //fieldset properties which we will animate
let animating; //flag to prevent quick multi-click glitches
$(".next").click(function(){
this.current_fs = $(this).parent();
	this.next_fs = $(this).parent().next();
	$("#progressbar li").eq($("fieldset").index(this.next_fs)).addClass("active");
	
  this.next_fs.show(); 
  this.current_fs.hide();
});

$(".previous").click(function(){
	this.current_fs = $(this).parent();
	this.previous_fs = $(this).parent().prev();
	$("#progressbar li").eq($("fieldset").index(this.current_fs)).removeClass("active");
	this.previous_fs.show(); 
  this.current_fs.hide();
	
});

$(".submit").click(function(){
	return false;
})
  }
  savedata(v){    
    this.projectintialdata=v;
    this.projectintialdata['fromdate']=this.fromDate;
    this.projectintialdata['todate']=this.toDate;    
    console.log(this.projectintialdata);
  }
  savedata1(v1){
    console.log(v1);
  }
}
