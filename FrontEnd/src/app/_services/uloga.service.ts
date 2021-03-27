import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment.prod';
import { Uloga } from './uloga'

const baseUrl = environment.url + 'uloga';
@Injectable({
  providedIn: 'root'
})
export class UlogaService {

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
  getUloge(){
    return this.request('get',baseUrl+'/uloga')
  }
  getUloga(id:number){
    return this.request('get',baseUrl+'/uloga/'+String(id))
  }
  createUloga(uloga:Uloga){
    return this.request('post',baseUrl+'/uloga',uloga)
  }
  updateUloga(id:number){
    return this.request('put',baseUrl+'/uloga/'+String(id))
  }
  deleteUloga(id:number){
    return this.request('delete',baseUrl+'/uloga/'+String(id))
  }
}
