import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'po';
  date : Date = new Date();
  todays_date:number;
     constructor() {
          setInterval(() => {
            this.todays_date= Date.now();
          }, 1);
      } 
  
}