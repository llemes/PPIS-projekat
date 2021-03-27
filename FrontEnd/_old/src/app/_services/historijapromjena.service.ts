import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HistorijaPromjena } from './historijapromjena';
import { environment } from '../environment.prod';

const baseUrl = environment.url + 'historijapromjena'

@Injectable({
  providedIn: 'root'
})
export class HistorijapromjenaService {

  constructor(private http: HttpClient) { }
  
  private async request(method: string, url: string, data?: any){
    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body'
    });
    return new Promise<any>((resolve, reject) => {
      result.subscribe(resolve as any, reject as any);
    });
  }

  getHistorijaPromjene(){
    return this.request('get', baseUrl + "/historijapromjena");
  }
  getHistorijaPromjena(id:number){
    return this.request('get', baseUrl + '/historijapromjena/' + String(id));
  }
  createHistorijaPromjena(historijaPromjena: HistorijaPromjena){
    return this.request('post', baseUrl + "/historijapromjena", historijaPromjena);
  }
  updateHistorijaPromjena(id:number){
    return this.request('put', baseUrl + '/historijapromjena/' + String(id));
  }
  deleteHistorijaPromjena(id:number){
    return this.request('delete', baseUrl + '/historijapromjena/' + String(id))
  }

}
