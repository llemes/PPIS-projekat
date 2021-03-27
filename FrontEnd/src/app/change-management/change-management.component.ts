import { Component, OnInit,Input } from '@angular/core';
import {Promjena} from '../_services/promjena';
import {PromjeneService } from '../_services/promjene.service';
import {KategorijaPromjene} from '../_services/kategorijapromjene'
import {KategorijapromjeneService} from '../_services/kategorijapromjene.service'
import {IzvjestajService}from '../_services/izvjestaj.service'
import { JwtHelperService } from '@auth0/angular-jwt';
import {AuthService} from '../_services/auth.service'
import { HistorijaPromjena } from '_old/src/app/_services/historijapromjena';
import {HistorijapromjenaService} from '../_services/historijapromjena.service'

@Component({
  selector: 'app-change-management',
  templateUrl: './change-management.component.html',
  styleUrls: ['./change-management.component.css']
})

export class ChangeManagementComponent implements OnInit {
  @Input()ChangeSettings:any;
  @Input()MyPromjene:boolean=false;
  @Input()AllPromjene:boolean =false;
  @Input()PromjeneKomitet:boolean =false;
  @Input()PromjeneForMe:boolean =false;

  isCollapsed:boolean =true;
  isNewChangeCollapsed:boolean=true;
  

  DefaultPromjene:Promjena[];
  ExpandPromjene:Promjena[];
  promjene:Promjena[];
  user:any;

  KategorijePromjene:KategorijaPromjene[];
  selectedKategorija:KategorijaPromjene;
  constructor(
    public promjeneService:PromjeneService, 
    public kategorijePromjeneService:KategorijapromjeneService,
    public izvjestajService:IzvjestajService,
    public auth:AuthService,
    public historijaPrService:HistorijapromjenaService
    ) {}

  ngOnInit() {
    this.DefaultPromjene=[];
    this.ExpandPromjene =[];
    const helper = new JwtHelperService();
     const decodedToken = helper.decodeToken(this.auth.token)
     this.user=decodedToken;
    if(this.MyPromjene) {this.getPromjeneOfUser(decodedToken.userId)}
    if(this.AllPromjene) this.getAllPromjene();
    if(this.PromjeneForMe) this.getPromjeneForDev(decodedToken.userId);
    if(this.PromjeneKomitet) this.getPromjeneForCommity(decodedToken.userId);
    this.getAllKategorijePromjene();
    console.log(this.DefaultPromjene);

  }
  async getPromjeneOfUser(id:number){
    const data =await this.izvjestajService.promjenePrijavio(id);
    this.promjene = data;
    if(this.promjene[0]){this.DefaultPromjene.push(this.promjene[0]);}
    if(this.promjene[1]){this.DefaultPromjene.push(this.promjene[1]);}
    this.promjene.shift();
    this.promjene.shift();
    this.ExpandPromjene=this.promjene;
  }
  async getAllPromjene(){
    const data =await this.promjeneService.getPromjene()
    this.promjene = data;
    if(this.promjene[0]){this.DefaultPromjene.push(this.promjene[0]);}
    if(this.promjene[1]){this.DefaultPromjene.push(this.promjene[1]);}
    this.promjene.shift();
    this.promjene.shift();
    this.ExpandPromjene=this.promjene;
  }
  async getPromjeneForDev(id:number){
    const data =await this.izvjestajService.promjeneIzvrsava(id)
    this.promjene = data;
    if(this.promjene[0]){this.DefaultPromjene.push(this.promjene[0]);}
    if(this.promjene[1]){this.DefaultPromjene.push(this.promjene[1]);}
    this.promjene.shift();
    this.promjene.shift();
    this.ExpandPromjene=this.promjene;
  }
  async getPromjeneForCommity(id:number){
    const data =await this.izvjestajService.promjeneOdobrava(id)
    this.promjene = data;
    if(this.promjene[0]){this.DefaultPromjene.push(this.promjene[0]);}
    if(this.promjene[1]){this.DefaultPromjene.push(this.promjene[1]);}
    this.promjene.shift();
    this.promjene.shift();
    this.ExpandPromjene=this.promjene;
  }

  async getAllKategorijePromjene(){
    const data = await this.kategorijePromjeneService.getKategorijePromjene();
    this.KategorijePromjene =data;
    this.selectedKategorija=this.KategorijePromjene[0]
  }
  submitPromjena(event:any){
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.auth.token);
    this.isNewChangeCollapsed=!this.isNewChangeCollapsed
    let promjena:Promjena = new Promjena();
    promjena.kategorijaPromjeneId = this.selectedKategorija.id;
    promjena.prijavio=decodedToken.userId;
    promjena.opis=event.target.opis.value;
    promjena.prihvacena=false;
    promjena.prioritetPromjeneId=0;
    console.log(promjena);
    this.savePromjena(promjena);
  }
  setKategorija(kategorija:any){
    this.selectedKategorija=kategorija;
  }
  async savePromjena(promjena:Promjena){
    const data =await this.promjeneService.createPromjena(promjena);
    console.log(data);
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.auth.token);
    let novahistorija:HistorijaPromjena = new HistorijaPromjena();
    novahistorija.datumOd=new Date();
    novahistorija.promjenaId = data.id;
    novahistorija.napravioIzmjenu= decodedToken.userId;
    novahistorija.statusPromjeneId=0;
    await this.historijaPrService.createHistorijaPromjena(novahistorija);
    this.DefaultPromjene=[];
    this.ExpandPromjene =[];
    if(this.MyPromjene) {this.getPromjeneOfUser(decodedToken.userId)}
    if(this.AllPromjene) this.getAllPromjene();
    if(this.PromjeneForMe) this.getPromjeneForDev(decodedToken.userId);
    if(this.PromjeneKomitet) this.getPromjeneForCommity(decodedToken.userId);

  }
  onDeletedPromjena(deleted:boolean){
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.auth.token);
    this.DefaultPromjene=[];
    this.DefaultPromjene=[];
    if(this.MyPromjene) {this.getPromjeneOfUser(decodedToken.userId)}
    if(this.AllPromjene) this.getAllPromjene();
    if(this.PromjeneForMe) this.getPromjeneForDev(decodedToken.userId);
    if(this.PromjeneKomitet) this.getPromjeneForCommity(decodedToken.userId);
  }
  onSentPromjena(deleted:boolean){}
  onStartedPromjena(deleted:boolean){}
  onApprovedPromjena(deleted:boolean){}
}
