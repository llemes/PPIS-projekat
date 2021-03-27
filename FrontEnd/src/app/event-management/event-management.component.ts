import { Component, OnInit, Input } from '@angular/core';
import { Dogadjaj } from '_old/src/app/_services/dogadjaj';
import { TipDogadjaja } from '_old/src/app/_services/tipdogadjaja';
import { IzvjestajService } from '../_services/izvjestaj.service';
import { DogadjajService } from '../_services/dogadjaj.service';
import { TipdogadjajaService } from '../_services/tipdogadjaja.service';
import { HistorijadogadjajService } from '../_services/historijadogadjaj.service';
import { PrioritetdogadjajaService } from '../_services/prioritetdogadjaja.service';
import { AuthService } from '../_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import {HistorijaDogadjaj}from '../_services/historijadogadjaj'

@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.css']
})
export class EventManagementComponent implements OnInit {
 /* @Input()MyGreske:boolean=false;
  @Input()AllGreske:boolean =false;
  @Input()GreskeKomitet:boolean =false;
  @Input()GreskeForMe:boolean =false;*/
  @Input()ChangeSettings:any;
  @Input()MyGreske:boolean=false;
  @Input()AllGreske:boolean =false;
  @Input()GreskeKomitet:boolean =false;
  @Input()GreskeForMe:boolean =false;

  isCollapsed:boolean =true;
  isNewEventCollapsed:boolean=true;

  DefaultGreske:Dogadjaj[];
  ExpandGreske:Dogadjaj[];
  Greske:Dogadjaj[];

  KategorijaGreske:TipDogadjaja[];
  selectedKategorija:TipDogadjaja;
  constructor(public izvjestajService: IzvjestajService,
    public dogadjajService: DogadjajService,
    public tipdogadjajaService: TipdogadjajaService,
    public historijadogadjajService: HistorijadogadjajService,
    public prioritetdogadjajaService: PrioritetdogadjajaService, 
    public authService:AuthService) {
   }

  ngOnInit() {
    this.DefaultGreske=[];
    this.ExpandGreske=[];
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.authService.token);
    if(this.MyGreske) this.getGreskeOfUser(decodedToken.userId);
    else this.getAllGreske();
    this.getAllKategorijeGreske();
    /*if(this.GreskeKomitet) this.getGreskeForDev();
    if(this.GreskeForMe) this.getGreskeForCommity();*/
  }

  async getGreskeOfUser(id:number){
    const data = await this.izvjestajService.dogadjajInicirao(id);
    this.Greske = data;

    if(this.Greske[0]) { this.DefaultGreske.push(this.Greske[0]);}
    if(this.Greske[1]) { this.DefaultGreske.push(this.Greske[1]);}
    this.Greske.shift();
    this.Greske.shift();
    this.ExpandGreske = this.Greske;
  }
  async getAllGreske(){
    const data = await this.dogadjajService.getDogadjaji();
    this.Greske = data;

    if(this.Greske[0]) { this.DefaultGreske.push(this.Greske[0]); }
    if(this.Greske[1]) { this.DefaultGreske.push(this.Greske[1]); }
    this.Greske.shift();
    this.Greske.shift();
    this.ExpandGreske = this.Greske;
    console.log(this.ExpandGreske);
  }
  /*async getGreskeForDev(){
    let Greske = await 
    if(Greske[0]) { this.DefaultGreske.push(Greske[0]); Greske.shift();}
    if(Greske[1]) { this.DefaultGreske.push(Greske[1]); Greske.shift();}
    this.ExpandGreske = Greske;
  }
  async getGreskeForCommity(){
    let Greske = await[new Dogadjaj(), new Dogadjaj(), new Dogadjaj(), new Dogadjaj(), new Dogadjaj()];
    if(Greske[0]) { this.DefaultGreske.push(Greske[0]); Greske.shift();}
    if(Greske[1]) { this.DefaultGreske.push(Greske[1]); Greske.shift();}
    this.ExpandGreske = Greske;
  }*/


  async getAllKategorijeGreske(){
    const data = await this.tipdogadjajaService.getTipoveDogadjaja();
    this.KategorijaGreske=data;
    this.selectedKategorija=this.KategorijaGreske[0];
  }
  submitGreska(event:any){
    this.isNewEventCollapsed = !this.isNewEventCollapsed;
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.authService.token);
    let novaGreska:Dogadjaj = new Dogadjaj();
    novaGreska.dogadjaj = event.target.opis.value;
    novaGreska.inicijator = decodedToken.userId;
    novaGreska.tipId = this.selectedKategorija.id;
    this.saveGreska(novaGreska);
    
  }
  setKategorija(kategorija:any){
    this.selectedKategorija = kategorija;
  }
  async saveGreska(greska:Dogadjaj){
    const data =await this.dogadjajService.createDogadjaj(greska);
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.authService.token);
    let novahistorija= new HistorijaDogadjaj();
    novahistorija.datumOd = new Date();
    novahistorija.dogadjajId= data.id;
    novahistorija.statusDogadjajId=0;
    this.DefaultGreske=[];
    this.ExpandGreske=[];
    await this.historijadogadjajService.createHistorijaDogadjaj(novahistorija);
    if(this.MyGreske) this.getGreskeOfUser(decodedToken.userId);
    else this.getAllGreske();
  }
  onDeletedGreska(deleted:boolean){
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.authService.token);
    this.DefaultGreske=[];
    this.ExpandGreske=[];
    if(this.MyGreske) this.getGreskeOfUser(decodedToken.userId);
    else this.getAllGreske();
  }

}
