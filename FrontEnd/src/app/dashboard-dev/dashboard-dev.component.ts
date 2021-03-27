import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-dev',
  templateUrl: './dashboard-dev.component.html',
  styleUrls: ['./dashboard-dev.component.css']
})
export class DashboardDevComponent implements OnInit {
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
