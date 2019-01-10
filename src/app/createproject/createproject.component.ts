import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl  } from '@angular/forms';

@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.scss']
})
export class CreateprojectComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  clients = [
    {name: 'Arizona', abbrev: 'AZ'},
    {name: 'California', abbrev: 'CA'},
    {name: 'Colorado', abbrev: 'CO'},
    {name: 'New York', abbrev: 'NY'},
    {name: 'Pennsylvania', abbrev: 'PA'},
  ];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
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
    }    
  );
//jQuery time
let current_fs:any, next_fs:any, previous_fs:any; //fieldsets
let left, opacity, scale; //fieldset properties which we will animate
let animating; //flag to prevent quick multi-click glitches
$(".next").click(function(){

	// if(this.animating) return false;
	// this.animating = true;
	this.current_fs = $(this).parent();
	this.next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(this.next_fs)).addClass("active");
	
	//show the next fieldset
  this.next_fs.show(); 
  this.current_fs.hide();
	//hide the current fieldset with style
	/*this.current_fs.animate({opacity: 0}, {
		step: function(now) {
  alert()
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
      this.scale = 1 - (1 - now) * 0.2;
      alert(this.scale)
			//2. bring next_fs from the right(50%)
			this.left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			this.opacity = 1 - now;
			this.current_fs.css({
        'transform': 'scale('+this.scale+')',
        'position': 'absolute'
      });
			this.next_fs.css({'left': this.left, 'opacity': this.opacity});
		}, 
		duration: 800, 
		complete: function(){
			this.current_fs.hide();
			this.animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});*/
});

$(".previous").click(function(){
	// if(this.animating) return false;
	// this.animating = true;
	
	this.current_fs = $(this).parent();
	this.previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(this.current_fs)).removeClass("active");
	
	//show the previous fieldset
  this.previous_fs.show(); 
  this.current_fs.hide();
	//hide the current fieldset with style
	/*this.current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			this.scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			this.left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			this.current_fs.css({'left': left});
			this.previous_fs.css({'transform': 'scale('+this.scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			this.current_fs.hide();
			this.animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});*/
});

$(".submit").click(function(){
	return false;
})
  }

}
