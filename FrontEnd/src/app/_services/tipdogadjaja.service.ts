import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment.prod';
import { TipDogadjaja } from './tipdogadjaja'

const baseUrl = environment.url + 'tipdogadjaja';
@Injectable({
  providedIn: 'root'
})
export class TipdogadjajaService {
  constructor(private http: HttpClient) {
  }
  private async request(method: string, url: string, data?: any) {

    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body'
    });
    return new Promise<any>((resolve, reject) => {
      result.subscribe(resolve as any, reject as any);
    });
  }
  getTipoveDogadjaja(){
    return this.request('get',baseUrl+'/tipdogadjaja')
  }
  getTipDogadjaja(id:number){
    return this.request('get',baseUrl+'/tipdogadjaja/'+String(id))
  }
  createTipDogadjaja(tipDogadjaja:TipDogadjaja){
    return this.request('post',baseUrl+'/tipdogadjaja',tipDogadjaja)
  }
  updateTipDogadjaja(id:number){
    return this.request('put',baseUrl+'/tipdogadjaja/'+String(id))
  }
  deleteTipDogadjaja(id:number){
    return this.request('delete',baseUrl+'/tipdogadjaja/'+String(id))
  }
}