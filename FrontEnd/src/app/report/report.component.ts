import { Component, OnInit, Input } from '@angular/core';
import { IzvjestajService } from '../_services/izvjestaj.service';
import { Korisnik } from '_old/src/app/_services/korisnik';
import { ChartsModule } from 'ng2-charts';
import { TestBed } from '@angular/core/testing';
import { Promjena } from '../_services/promjena';
import { Dogadjaj } from '_old/src/app/_services/dogadjaj';
import { HistorijaPromjena } from '../_services/historijapromjena';
import { HistorijaDogadjaj } from '../_services/historijadogadjaj';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  @Input() changeSettings:any;
  disableSth:boolean=false;
  
  @Input() Helpdesk=false;
  @Input()Korisnik=false;
  @Input()Developer=false;
  @Input()Komitet=false;

  promjenaId:number;
  eventId:number;
  inicijatorId:number;
  nizKorisnika:Korisnik[];
  nizPromjena:Promjena[];
  nizDogadjaja:Dogadjaj[];
  nizPromjenePrijavio:Promjena[];
  nizPromjeneIzvrsava:Promjena[];
  nizPromjeneOdobrava:Promjena[];
  nizZadnjaHistorijaPromjene:HistorijaPromjena[];
  nizPrvaHistorijaPromjene:HistorijaPromjena[];
  nizZadnjaHistorijaDogadjaja:HistorijaDogadjaj[];
  nizPrvaHistorijaDogadjaja:HistorijaDogadjaj[];
  nizDogadjajInicirao:HistorijaDogadjaj[];
  broj:any;
  kategorija1:any;
  kategorija2:any;
  kategorija3:any;
  kategorija4:any;
  broj1:any;
  broj2:any;
  broj3:any;
  broj4:any;
  public pieChartLabels:any;
  public pieChartData:any;
  public pieChartType: any;
  public pieChartLabels1:any;
  public pieChartData1:any;
  public pieChartType1: any;
  public chartOptions: any;
  constructor(public report:IzvjestajService) { }

  ngOnInit() {
    this.nizKorisnika=[];
    this.nizPromjenePrijavio=[];
    this.nizPromjeneIzvrsava=[];
    this.nizPromjeneOdobrava=[];
    this.nizZadnjaHistorijaPromjene=[];
    this.nizPrvaHistorijaPromjene=[];
    this.nizZadnjaHistorijaDogadjaja=[];
    this.nizPrvaHistorijaDogadjaja=[];
    this.nizDogadjajInicirao=[];
    this.listaKorisnika();//helpdesk
    this.brojKorisnika();//helpdesk
    this.kategorijePromjena();//helpdesk
    this.tipoviDogadjaja();//helpdesk
    this.promjeneCekanjeRjesavanje();//helpdesk
    this.promjenePrijavio(this.promjenaId);//user
    this.promjeneOdobrava(this.promjenaId);//komitet
    this.promjeneIzvrsava(this.promjenaId);//dev
    this.zadnjaHistorijaPromjene(this.promjenaId);//no helpdesk
    this.prvaHistorijaPromjene(this.promjenaId);//no helpdesk
    this.dogadjajPrioritet();//helpdesk
    this.dogadjajInicirao(this.inicijatorId);//user
    this.zadnjaHistorijaDogadjaja(this.eventId);//no helpdesk
    this.prvaHistorijaDogadjaja(this.eventId);//no helpdesk
  }

  async brojKorisnika(){
    const data=await this.report.brojKorisnika();
    console.log(data);
    this.broj=data[0].brojKorisnika;
  }

  async listaKorisnika(){
    const data=await this.report.listaKorisnika();
    console.log(data);
    this.listaKorisnika=data;
  }

  async kategorijePromjena(){
    const data = await this.report.kategorijaPromjene();
    console.log(data);
    this.kategorija1=data[0].nazivKategorije;
    this.broj1=data[0].broj;
    this.pieChartLabels1 =[this.kategorija1,this.kategorija2];
    this.pieChartData1=[this.broj1,this.broj2];
    this.pieChartType1='pie';
    this.chartOptions={
      responsive:true,
      legend:{
        labels:{
          fontColor:'white'
        }
      }
    }
  }
  async tipoviDogadjaja(){
    const data = await this.report.kategorijaPromjene();
    console.log(data);
    this.kategorija1=data[0].nazivKategorije;
    this.kategorija2=data[1].nazivKategorije;
    this.kategorija3=data[2].nazivKategorije;
    this.kategorija4=data[3].nazivKategorije;
    this.broj1=data[0].broj;
    this.broj2=data[1].broj;
    this.broj3=data[2].broj;
    this.broj4=data[3].broj;
    this.pieChartLabels = [this.kategorija1,this.kategorija2,this.kategorija3,this.kategorija4];
    this.pieChartData = [this.broj1,this.broj2,this.broj3,this.broj4];
    this.pieChartType= 'pie';
    this.chartOptions={
      responsive:true,
      legend:{
        labels:{
          fontColor:'white'
        }
      }
    }
  }
  async promjeneCekanjeRjesavanje(){
    const data= await this.report.promjeneCekanjeRjesavanje();
    console.log(data);
    this.nizPromjena=data;
  }
  async dogadjajPrioritet(){
    const data = await this.report.dogadjajPrioritet();
    console.log(data);
    this.nizDogadjaja=data;  
  }
  async promjenePrijavio(prijavioId:number){
    const data = await this.report.promjenePrijavio(prijavioId);
    console.log(data);
    this.nizPromjenePrijavio=data;
  }
  async promjeneIzvrsava(izvrsavaId:number){
    const data = await this.report.promjeneIzvrsava(izvrsavaId);
    console.log(data);
    this.nizPromjeneIzvrsava=data;
  }
  async promjeneOdobrava(odobravaId:number){
    const data = await this.report.promjeneOdobrava(odobravaId);
    console.log(data);
    this.nizPromjeneOdobrava=data;
  }
  async zadnjaHistorijaPromjene(promjenaId:number){
    const data = await this.report.zadnjaHistorijaPromjene(promjenaId);
    console.log(data);
    this.nizZadnjaHistorijaPromjene=data;
  }
  async prvaHistorijaPromjene(promjenaId:number){
    const data = await this.report.prvaHistorijaPromjene(promjenaId);
    console.log(data);
    this.nizPrvaHistorijaPromjene=data;
  }
  async zadnjaHistorijaDogadjaja(eventId:number){
    const data = await this.report.zadnjaHistorijaDogadjaja(eventId);
    console.log(data);
    this.nizZadnjaHistorijaDogadjaja=data;
  }
  async prvaHistorijaDogadjaja(eventId:number){
    const data = await this.report.prvaHistorijaDogadjaja(eventId);
    console.log(data);
    this.nizPrvaHistorijaDogadjaja=data;
  }
  async dogadjajInicirao(inicijatorId:number){
    const data = await this.report.dogadjajInicirao(inicijatorId);
    console.log(data);
    this.nizDogadjajInicirao=data;
  }
}