import { Component, OnInit, NgModule } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import {ModalService} from'../_services/modal.service';
import {Korisnik} from '../_services/korisnik'
import {Router} from "@angular/router"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedUser:Korisnik;
  loggedIn:boolean
  constructor(private modalService: NgbModal ,public modal: ModalService,private router:Router) {
    this.loggedIn=false;
   }

  ngOnInit() {
  }
  openLogin() {
    const modalRef = this.modalService.open(LoginComponent);
    modalRef.result.then((result) => {
      this.loggedUser=result;
      this.loggedIn=true;
      console.log(this.loggedUser);
    }).catch((error) => {
      console.log(error);
    });
  }
  logout(){
    this.router.navigate(['..'])
    this.loggedIn=false;

  }

}
