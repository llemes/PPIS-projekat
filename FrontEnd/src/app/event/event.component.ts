import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dogadjaj } from '_old/src/app/_services/dogadjaj';
import { HistorijaDogadjaj } from '../_services/historijadogadjaj';
import { IzvjestajService } from '../_services/izvjestaj.service';
import { DogadjajService } from '../_services/dogadjaj.service';
import { TipdogadjajaService } from '../_services/tipdogadjaja.service';
import { HistorijadogadjajService } from '../_services/historijadogadjaj.service';
import { PrioritetdogadjajaService } from '../_services/prioritetdogadjaja.service';
import { AuthService } from '../_services/auth.service';
import { StatusdogadjajaService } from '../_services/statusdogadjaja.service';
import { NgSelectOption } from '@angular/forms';
import { TipDogadjaja } from '../_services/tipdogadjaja'
import {Korisnik} from '../_services/korisnik'
import { KorisnikService } from '../_services/korisnik.service';
import {PrioritetDogadjaja}from '../_services/prioritetdogadjaja';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() greska:Dogadjaj;
  @Input() changeSettings:any;
  disableStatus:boolean=true;
  default:any;

  tipDogadjaja:TipDogadjaja;
  historijaPrva: HistorijaDogadjaj;
  historijaZadnja: HistorijaDogadjaj;

  inicijator:Korisnik;
  kreiran:Date;
  izmjenjen:Date;
  prioritet:PrioritetDogadjaja;

  Helpdesk=false;
  Korisnik=false;
  Developer=false;
  Komitet=false;

  CollapseData:boolean=true;

  @Output() onDeleted = new EventEmitter<boolean>();

  Statuses : any[] = [
    {text: "Čekanje", style:"form-control form-status-cekanje"},
    {text: "Greška", style:"form-control form-status-greska"},
    {text: "U toku", style: "form-control form-status-uToku"},
    {text: "Završeno", style:"form-control form-status-zavrseno"}
  ]
  constructor(public izvjestajService: IzvjestajService,
    public dogadjajService: DogadjajService,
    public tipdogadjajaService: TipdogadjajaService,
    public historijadogadjajService: HistorijadogadjajService,
    public prioritetdogadjajaService: PrioritetdogadjajaService, 
    public authService:AuthService,
    public statusdogadjajaService : StatusdogadjajaService,
    public korisnikService:KorisnikService) { }

  ngOnInit() {
    this.default =this.Statuses[0];
    this.historijaZadnja =new HistorijaDogadjaj();
    this.tipDogadjaja = new TipDogadjaja();
    this.inicijator = new Korisnik();
    this.izmjenjen = new Date();
    this.kreiran = new Date();
    this.prioritet = new PrioritetDogadjaja()
    this.GetHistories(this.greska.id);
    this.getTipDogadjaja(this.greska.tipId);
    this.getInicijator(this.greska.inicijator)
    this.getPrioritet(this.greska.prioritetId);
    if(this.changeSettings.Helpdesk!==undefined){this.Helpdesk =this.changeSettings.Helpdesk; this.disableStatus = false;}
    if(this.changeSettings.Korisnik !==undefined)this.Korisnik =this.changeSettings.Korisnik;
    if(this.changeSettings.Developer !==undefined){this.Developer =this.changeSettings.Developer;this.disableStatus = false;}
    if(this.changeSettings.Komitet !==undefined)this.Komitet =this.changeSettings.Komitet;
  
  }
  async getStatuses(){
    const data = await this.statusdogadjajaService.getStatuseDogadjaja();
    this.Statuses = data;
    
  }
  setStatus(status:any){
    this.default = status
    this.historijaZadnja.statusDogadjajId=this.Statuses.indexOf(status);
    this.historijaZadnja.datumOd = new Date();
    this.CreateHistory(this.historijaZadnja);
  }
  async getTipDogadjaja(id:number){
    const data =await this.tipdogadjajaService.getTipDogadjaja(id);
    this.tipDogadjaja=data;
  }
  async getInicijator(id:number){
    const data = await this.korisnikService.getKorisnik(id);
    this.inicijator=data;

  }
  async getPrioritet(id:number){
    const data = await this.prioritetdogadjajaService.getPrioritetDogadjaja(id);
    this.prioritet = data;
  }
  async GetHistories(id:number){
    const data= await this.izvjestajService.zadnjaHistorijaDogadjaja(id);
    this.historijaZadnja=data[0]; 
    const data2= await this.izvjestajService.prvaHistorijaDogadjaja(id);
    this.historijaPrva=data2[0];
    this.default = this.Statuses[this.historijaZadnja.statusDogadjajId];
    this.kreiran= new Date(this.historijaPrva.datumOd);
    this.izmjenjen =new Date(this.historijaZadnja.datumOd);
  }
  async CreateHistory(historija:HistorijaDogadjaj){
    await this.historijadogadjajService.createHistorijaDogadjaj(historija);
    this.GetHistories(this.greska.id);
  }
  async delete(){


    await this.dogadjajService.deleteDogadjaj(this.greska.id);
    this.onDeleted.emit(true);
  }
}
