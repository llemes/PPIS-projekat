import { Injectable } from '@angular/core';
import { environment } from '../environment.prod';
import { HttpClient } from '@angular/common/http';
import { Korisnik } from './korisnik';

const baseUrl = environment.url + 'korisnik';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

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

  getKorisnici(){
    return this.request('get', baseUrl + '/korisnik')
  }
  getKorisnik(id:number){
    return this.request('get', baseUrl + '/korisnik/' + String(id));
  }
  createKorisnik(korisnik: Korisnik){
    return this.request('post', baseUrl + '/korisnik',korisnik)
  }
  updateKorisnik(id:number){
    return this.request('put', baseUrl + '/korisnik/' + String(id));
  }
  deleteKorisnik(id:number){
    return this.request('delete', baseUrl + '/korisnik/' + String(id))
  }


}
