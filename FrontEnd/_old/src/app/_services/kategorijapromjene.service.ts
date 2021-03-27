import { Injectable } from '@angular/core';
import { environment } from '../environment.prod';
import { HttpClient } from '@angular/common/http';
import { KategorijaPromjene } from './kategorijapromjene';

const baseUrl = environment.url + 'kategorijapromjene';

@Injectable({
  providedIn: 'root'
})
export class KategorijapromjeneService {

  constructor(private http: HttpClient) { }

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

  getKategorijePromjene(){
    return this.request('get', baseUrl + '/kategorijapromjene')
  }
  getKategorijaPromjene(id:number){
    return this.request('get', baseUrl + '/kategorijapromjene/' + String(id));
  }
  
  createKategorijaPromjene(kategorijaPromjene: KategorijaPromjene){
    return this.request('post', baseUrl + '/kategorijapromjene', kategorijaPromjene)
  }
  updateKategorijaPromjene(id:number){
    return this.request('put', baseUrl + '/kategorijapromjene/' + String(id));
  }
  deleteKategorijaPromjene(id:number){
    return this.request('delete', baseUrl + '/kategorijapromjene/' + String(id))
  }

}
