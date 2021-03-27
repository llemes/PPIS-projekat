import { Injectable,EventEmitter,Output } from '@angular/core';
import {Korisnik} from '../_services/korisnik'

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  loggedIn:Korisnik;
  @Output() login: EventEmitter<Korisnik> = new EventEmitter();

  logIn(korisnik:Korisnik){
    this.loggedIn =korisnik;
    this.login.emit(this.loggedIn);

  }
  
}
