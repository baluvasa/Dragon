import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import { EventEmitterService } from '../event-emitter.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router,private eventEmitterService: EventEmitterService) { }

  ngOnInit() {
    localStorage.clear();
    this.eventEmitterService.menuinvokefunction();
    this.router.navigate(['login']);
  }

}
