import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { environment } from '../environment.prod';
import { Dogadjaj } from './dogadjaj';
import { HistorijaDogadjaj } from './historijadogadjaj';
import { HistorijaPromjena } from './historijapromjena';
import { KategorijaPromjene } from './kategorijapromjene';
import { Korisnik } from './korisnik';
import { PrioritetDogadjaja } from './prioritetdogadjaja';
import {PrioritetPromjene} from './prioritetpromjene';
import { Promjena }from './promjena'
import { StatusDogadjaja }from './statusdogadjaja';
import { StatusPromjene } from './statuspromjene';
import { TipDogadjaja } from './tipdogadjaja';
import { Uloga } from './uloga'



const baseUrl = environment.url + 'izvjestaj';
@Injectable({
    providedIn:'root'
})
export class IzvjestajService {
    constructor(private http: HttpClient){}

    private async request(method:string,url:string,data?:any){
        const result=this.http.request(method,url,{
            body:data,
            responseType:'json',
            observe:'body'
        });
        return new Promise<any>((resolve,reject)=>{
            result.subscribe(resolve as any, reject as any);
        });
    }
    brojKorisnika(){
        return this.request('get',baseUrl+'/brojKorisnika')
    }
    listaKorisnika(){
        return this.request('get',baseUrl+'/korisnici')
    }
    kategorijaPromjene(){
        return this.request('get',baseUrl+'/promjenekategorija')
    }
    tipoviDogadjaja(){
        return this.request('get',baseUrl+'/tipovidogadjaja')
    }
    promjeneCekanjeRjesavanje(){
        return this.request('get',baseUrl+'/promjenecr')
    }
    dogadjajPrioritet(){
        return this.request('get',baseUrl+'/dogadjajPrioritet')
    }
    promjenePrijavio(prijavioId:number){
        return this.request('get',baseUrl+'/promjeneUser/'+String(prijavioId))
    }
    promjeneIzvrsava(izvrsavaId:number){
        return this.request('get', baseUrl+'/promjeneDev/'+String(izvrsavaId))
    }
    promjeneOdobrava(odobravaId:number){
        return this.request('get', baseUrl+'/promjeneKomitet/'+String(odobravaId))
    }
    zadnjaHistorijaPromjene(promjenaId){
        return this.request('get', baseUrl+'/promjeneZadnja/'+String(promjenaId))
    }
    prvaHistorijaPromjene(promjenaId){
        return this.request('get', baseUrl+'/promjenePrva/'+String(promjenaId))
    }
    zadnjaHistorijaDogadjaja(eventId){
        return this.request('get', baseUrl+'/dogadjajZadnji/'+String(eventId))
    }
    prvaHistorijaDogadjaja(eventId){
        return this.request('get', baseUrl+'/dogadjajPrvi/'+String(eventId))
    }
    dogadjajInicirao(inicijatorId){
        return this.request('get', baseUrl+'/dogadjajUser/'+String(inicijatorId))
    }



}