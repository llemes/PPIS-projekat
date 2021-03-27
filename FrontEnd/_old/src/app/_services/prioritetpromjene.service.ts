import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment.prod';
import {PrioritetPromjene} from './prioritetpromjene'

const baseUrl = environment.url + 'prioritetpromjene';
@Injectable({
  providedIn: 'root'
})
export class PrioritetpromjeneService {

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
  getPrioritetePromjene(){
    return this.request('get',baseUrl+'/prioritetpromjene')
  }
  getPrioritetPromjene(id:number){
    return this.request('get',baseUrl+'/prioritetpromjene/'+String(id))
  }
  createPrioritetPromjene(prioritetPromjene:PrioritetPromjene){
    return this.request('post',baseUrl+'/prioritetpromjene',prioritetPromjene)
  }
  updatePrioritetPromjene(id:number){
    return this.request('put',baseUrl+'/prioritetpromjene/'+String(id))
  }
  deletePrioritetPromjene(id:number){
    return this.request('delete',baseUrl+'/prioritetpromjene/'+String(id))
  }

}
