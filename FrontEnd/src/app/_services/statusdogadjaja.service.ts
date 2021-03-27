import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment.prod';
import { StatusDogadjaja }from './statusdogadjaja'

const baseUrl = environment.url + 'statusdogadjaja';
@Injectable({
  providedIn: 'root'
})
export class StatusdogadjajaService {
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
  getStatuseDogadjaja(){
    return this.request('get',baseUrl+'/statusdogadjaja')
  }
  getStatusDogadjaja(id:number){
    return this.request('get',baseUrl+'/statusdogadjaja/'+String(id))
  }
  createStatusDogadjaja(statusDogadjaja:StatusDogadjaja){
    return this.request('post',baseUrl+'/statusdogadjaja',statusDogadjaja)
  }
  updateStatusDogadjaja(id:number){
    return this.request('put',baseUrl+'/statusdogadjaja/'+String(id))
  }
  deleteStatusDogadjaja(id:number){
    return this.request('delete',baseUrl+'/statusdogadjaja/'+String(id))
  }
}
