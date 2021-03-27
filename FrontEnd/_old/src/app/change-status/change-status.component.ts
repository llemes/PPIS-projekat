import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-status',
  templateUrl: './change-status.component.html',
  styleUrls: ['./change-status.component.css']
})
export class ChangeStatusComponent implements OnInit {

  constructor() { }
  default:any;


  Statuses : any[] = [
    {text: "Čekanje", style:"form-control form-status-cekanje"},
    {text: "Greška", style:"form-control form-status-greska"},
    {text: "U toku", style: "form-control form-status-uToku"},
    {text: "Završeno", style:"form-control form-status-zavrseno"}
  ]
  ngOnInit() {
    this.default =this.Statuses[0];
  }
  setStatus(status:any){
    this.default = status
  }

}