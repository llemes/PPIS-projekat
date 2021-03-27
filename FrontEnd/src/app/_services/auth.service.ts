import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment.prod';
import { Login } from '../_services/login'

const baseUrl = environment.url + 'auth'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token:string;
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

  login(loginData:Login){
    return this.request('post',baseUrl + "/login",loginData)
  }
}
