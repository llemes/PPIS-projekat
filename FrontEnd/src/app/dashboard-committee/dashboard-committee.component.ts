import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-committee',
  templateUrl: './dashboard-committee.component.html',
  styleUrls: ['./dashboard-committee.component.css']
})
export class DashboardCommitteeComponent implements OnInit {

  constructor() { }
  selectChange:boolean=true;
  selectEvent:boolean=false;
  selectReport:boolean=false;
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
