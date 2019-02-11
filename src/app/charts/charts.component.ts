import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  constructor(private eventEmitterService: EventEmitterService) { }

  ngOnInit() {
    
    this.eventEmitterService.menuinvokefunction(); 
  }

}
