import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Promjena }from './promjena'
import { environment } from '../environment.prod';

const baseUrl = environment.url + 'promjena';


@Injectable({
  providedIn: 'root'
})
export class PromjeneService {

  constructor(private http: HttpClient) {
  }
  private async request(method: string, url: string, data?: any) {

    console.log('request ' + JSON.stringify(data));
    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body'
    });
    return new Promise<any>((resolve, reject) => {
      result.subscribe(resolve as any, reject as any);
    });
  }
  getPromjene(){
    return this.request('get',baseUrl+'/promjena')
  }
  getPromjena(id:number){
    return this.request('get',baseUrl+'/promjena/'+String(id))
  }
  createPromjena(promjena:Promjena){
    return this.request('post',baseUrl+'/promjena',promjena)
  }
  deletePromjena(id:number){
    return this.request('delete',baseUrl+'/promjena/'+String(id))
  }
  updatePromjena(id:number){
    return this.request('put',baseUrl+'/promjena/'+String(id)) 
  }
  
}
