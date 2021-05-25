import { Component, OnInit, NgModule } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import {ModalService} from'../_services/modal.service';
import {Korisnik} from '../_services/korisnik'
import {Router} from "@angular/router"
import {AuthService} from '../_services/auth.service'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedUser:Korisnik;
  loggedIn:boolean
  public items = [
         {
           class:"homepage",
           label: "Home page",
           url: "/home"
         },
         {
          class:"page",
          label: "About us",
          url: "/about"
        },
        {
          class:"site",
          label: "Our clients",
          url: "/ourclients"
        },
        {
          class:"site",
          label: "Contact",
          url: "/contactus"
        },
  ]
  constructor(private modalService: NgbModal ,public modal: ModalService,private router:Router, private auth:AuthService) {
    this.loggedIn=false;
   }

  ngOnInit() {
  }
  openLogin() {
    const modalRef = this.modalService.open(LoginComponent);
    modalRef.result.then((result) => {
      this.loggedUser=result;
      this.loggedIn=true;
    }).catch((error) => {
      console.log(error);
    });
  }
  logout(){

    this.router.navigate(['..'])
    this.loggedIn=false;
    this.auth.token=undefined;

  }

  navigate(url:any){
    this.router.navigate([url])
  }

}
