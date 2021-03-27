import { Component,HostBinding, Input } from '@angular/core';
import {Korisnik} from '../app/_services/korisnik'
import {ModalService} from'../app/_services/modal.service'
import {Router} from "@angular/router"

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Team VII';

  constructor(public modalService: ModalService, private router:Router) {
  }
  ngOnInit(){
    
  }

}