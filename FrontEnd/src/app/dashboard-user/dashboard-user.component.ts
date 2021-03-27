import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {
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
