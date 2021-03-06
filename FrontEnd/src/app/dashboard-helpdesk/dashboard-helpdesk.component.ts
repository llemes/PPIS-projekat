import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-helpdesk',
  templateUrl: './dashboard-helpdesk.component.html',
  styleUrls: ['./dashboard-helpdesk.component.css']
})
export class DashboardHelpdeskComponent implements OnInit {

  selectChange:boolean=true;
  selectEvent:boolean=false;
  selectReport:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  change(){
    this.selectChange=true;
    this.selectEvent=false;
    this.selectReport=false;
  }
  event(){
    this.selectChange=false;
    this.selectEvent=true;
    this.selectReport=false;
  }
  report(){
    this.selectChange=false;
    this.selectEvent=false;
    this.selectReport=true;
  }
}
