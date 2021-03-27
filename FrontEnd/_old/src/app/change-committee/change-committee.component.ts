import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-committee',
  templateUrl: './change-committee.component.html',
  styleUrls: ['./change-committee.component.css']
})
export class ChangeCommitteeComponent implements OnInit {

  constructor() { }
  default:any;
  Prioriteti : any[] = [
    {text: "Jako nizak", style:"form-control form-prioritet-jn"},
    {text: "Nizak", style:"form-control form-prioritet-n"},
    {text: "Srednji", style: "form-control form-prioritet-s"},
    {text: "Visok", style:"form-control form-prioritet-v"},
    {text: "Jako visok", style:"form-control form-prioritet-jv"}
  ]
  ngOnInit() {
    this.default =this.Prioriteti[0];
  }
  setPrioritet(prioritet:any){
    this.default = prioritet
  }
}
