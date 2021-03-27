import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {Promjena} from '../_services/promjena';
import {PromjeneService } from '../_services/promjene.service';
import {HistorijaPromjena} from '../_services/historijapromjena'
import {HistorijapromjenaService} from '../_services/historijapromjena.service'
import { isUndefined } from 'util';
import { AuthService } from '../_services/auth.service';
import {Korisnik} from '../_services/korisnik'
import { KorisnikService } from '../_services/korisnik.service';
import { IzvjestajService } from '../_services/izvjestaj.service';
import {KategorijaPromjene}from '../_services/kategorijapromjene';
import {KategorijapromjeneService}from '../_services/kategorijapromjene.service';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {


  @Input() promjena:Promjena;
  @Input() changeSettings:any;
  disableRazvojnitim:boolean=true;
  disableStatus:boolean=true;

  Helpdesk=false;
  Korisnik=false;
  Developer=false;
  Komitet=false;

  @Output() onDeleted = new EventEmitter<boolean>();
  @Output() onSent = new EventEmitter<boolean>();
  @Output() onStarted = new EventEmitter<boolean>();
  @Output() onArchived = new EventEmitter<boolean>();
  @Output() onApproved = new EventEmitter<boolean>();

  defaultStatus:any;
  historijaZadnja:HistorijaPromjena;
  historijaPrva:HistorijaPromjena;
  kategorijaPromjene:KategorijaPromjene;
  kreiran:Date;
  izmjenjen:Date;
  prijavio:Korisnik;
  izmjenio:Korisnik;
  odobrio:string;
  odobreno:string;

  CollapseData:boolean=true;

  constructor(
    public promjeneService:PromjeneService,
    public historijaPromjenaService:HistorijapromjenaService,
    public auth:AuthService,
    public korisnikervic:KorisnikService,
    public izvjestaj:IzvjestajService,
    public kategorijeService:KategorijapromjeneService
  ) {}

  Statuses : any[] = [
    {text: "Čekanje", style:"form-control form-status-cekanje"},
    {text: "Greška", style:"form-control form-status-greska"},
    {text: "U toku", style: "form-control form-status-uToku"},
    {text: "Završeno", style:"form-control form-status-zavrseno"}
  ]
  default:any;
  Prioriteti : any[] = [
    {text: "Jako nizak", style:"form-control form-prioritet-jn"},
    {text: "Nizak", style:"form-control form-prioritet-n"},
    {text: "Srednji", style: "form-control form-prioritet-s"},
    {text: "Visok", style:"form-control form-prioritet-v"},
    {text: "Jako visok", style:"form-control form-prioritet-jv"}
  ]
  ngOnInit() {
    this.defaultStatus =this.Statuses[0];
    this.default =this.Prioriteti[0];
    this.historijaZadnja= new HistorijaPromjena();
    this.historijaPrva = new HistorijaPromjena();
    this.kategorijaPromjene= new KategorijaPromjene();
    this.kreiran= new Date();
    this.izmjenjen = new Date();
    this.prijavio = new Korisnik();
    if(this.changeSettings.Helpdesk!==undefined){this.Helpdesk =this.changeSettings.Helpdesk;this.disableRazvojnitim=false; this.disableStatus=false;}
    if(this.changeSettings.Korisnik !==undefined)this.Korisnik =this.changeSettings.Korisnik;
    if(this.changeSettings.Developer !==undefined){this.Developer =this.changeSettings.Developer;this.disableStatus=false;}
    if(this.changeSettings.Komitet !==undefined)this.Komitet =this.changeSettings.Komitet;
    this.GetHistories(this.promjena.id);
    this.getKategorijuPromjene(this.promjena.kategorijaPromjeneId);
    this.getOdobrio(this.promjena.odobrio)
    this.getPrijavio(this.promjena.prijavio)
    if(this.promjena.prihvacena)this.odobreno ="odobreno"
    else this.odobreno = "nije odobreno";

  }
  setStatus(status:any){
    this.defaultStatus = status
  }
  setPrioritet(prioritet:any){
    this.default = prioritet
  }

  async GetHistories(id:number){
    const data= await this.izvjestaj.zadnjaHistorijaPromjene(id);
    this.historijaZadnja=data[0]; 
    const data2= await this.izvjestaj.prvaHistorijaPromjene(id);
    this.historijaPrva=data2[0];
    this.defaultStatus = this.Statuses[this.historijaZadnja.statusPromjeneId];
    this.default = this.Prioriteti[this.promjena.prioritetPromjeneId];
    this.kreiran= new Date(this.historijaPrva.datumOd);
    this.izmjenjen =new Date(this.historijaZadnja.datumOd);
  
  }
  async getKategorijuPromjene(id:number){
    const data =await this.kategorijeService.getKategorijaPromjene(id);
    this.kategorijaPromjene=data;
    console.log(data);
  }
  async getPrijavio(id:number){
    const data = await this.korisnikervic.getKorisnik(id);
    this.prijavio=data;
    this.prijavio.username
  }
  async getOdobrio(id:number){
    if (id){
      const data = await this.korisnikervic.getKorisnik(id);
      this.odobrio = data.username;
    }
    else
    this.odobrio ="/"
    this.historijaZadnja.statusPromjeneId
  }


  async delete(){
    await this.promjeneService.deletePromjena(this.promjena.id);
    this.onDeleted.emit(true);
  }
  async send(){
    this.promjena.odobrio=3;
    this.odobrio="khalilbegovic1"
    await this.promjeneService.updatePromjena(this.promjena.id,this.promjena)
    this.onSent.emit(true);
  }//postavlja se na odobravanje komitetu
  async approve(){
    this.promjena.prihvacena=true;
    this.odobreno ="odobreno"
    await this.promjeneService.updatePromjena(this.promjena.id,this.promjena);
  }//komitet odobrava
  async start(){
    this.promjena.izvrsitelj = 1;
    await this.promjeneService.updatePromjena(this.promjena.id,this.promjena);
  }//postavlja se dev na izvrsitelj
  async archive(){} //no idea??? (just ignore it)
}
