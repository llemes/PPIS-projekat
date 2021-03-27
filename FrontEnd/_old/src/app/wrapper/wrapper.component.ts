import { Component, OnInit } from '@angular/core';
import {PromjeneService} from '../_services/promjene.service'
import {Promjena}from '../_services/promjena'


@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
  newPromjena:Promjena=new Promjena();


  constructor(public promjeneService: PromjeneService) { }

  ngOnInit() {
    //this.createPromjena();
    //this.refresh();
  }
  async refresh() {
    const data = await this.promjeneService.getPromjene();
    console.log(data);
  }
  async createPromjena(){
    this.newPromjena.opis = "TestnaPromjena";
    await this.promjeneService.createPromjena(this.newPromjena);
  }


}