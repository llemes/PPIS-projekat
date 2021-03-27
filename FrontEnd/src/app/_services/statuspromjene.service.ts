import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment.prod';
import { StatusPromjene } from './statuspromjene'

const baseUrl = environment.url + 'statuspromjene';
@Injectable({
  providedIn: 'root'
})
export class StatuspromjeneService {
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
  getStatusePromjena(){
    return this.request('get',baseUrl+'/statuspromjene')
  }
  getStatusPromjene(id:number){
    return this.request('get',baseUrl+'/statuspromjene/'+String(id))
  }
  createStatusPromjene(statusPromjene:StatusPromjene){
    return this.request('post',baseUrl+'/statuspromjene',statusPromjene)
  }
  updateStatusPromjene(id:number){
    return this.request('put',baseUrl+'/statuspromjene/'+String(id))
  }
  deleteStatusPromjene(id:number){
    return this.request('delete',baseUrl+'/statuspromjene/'+String(id))
  }
}