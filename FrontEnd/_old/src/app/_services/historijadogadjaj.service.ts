import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HistorijaDogadjaj } from './historijadogadjaj';
import { environment } from '../environment.prod';

const baseUrl = environment.url + 'historijadogadjaj';

@Injectable({
  providedIn: 'root'
})
export class HistorijadogadjajService {

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
  getHistorijaDogadjaji(){
    return this.request('get', baseUrl + "/historijadogadjaj");
  }
  getHistorijaDogadjaj(id:number){
    return this.request('get', baseUrl + '/historijadogadjaj/' + String(id));
  }
  createHistorijaDogadjaj(historijaDogadjaj: HistorijaDogadjaj){
    return this.request('post', baseUrl + "/historijadogadjaj", historijaDogadjaj);
  }
  updateHistorijaDogadjaj(id:number){
    return this.request('put', baseUrl + '/historijadogadjaj/' + String(id));
  }
  deleteHistorijaDogadjaj(id:number){
    return this.request('delete', baseUrl + '/historijadogadjaj/' + String(id))
  }
}
