import { Component, OnInit,HostListener } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Korisnik} from '../_services/korisnik'
import {Login} from '../_services/login'
import {KorisnikService} from '../_services/korisnik.service'
import {AuthService} from '../_services/auth.service'
import {ModalService} from'../_services/modal.service'
import { JwtHelperService } from '@auth0/angular-jwt';
import {Router} from "@angular/router"
import { from } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  closeResult: string;
  submitted = false;
  badLogin=false;

  users: Korisnik[];
  loginID:Korisnik;
  loginData:Login;

  constructor(private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,public modalService: ModalService,private router:Router, public korisnikService:KorisnikService, public authService:AuthService) { }

  ngOnInit() {
    localStorage.setItem("token","");

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      password: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(15)]]   
  });
  //this should be replaced with the service data eventually, but will serve for now
    this.loginData = new Login();
    this.users=[
      {id:0,firstName:'' ,lastName:'',username: 'helpdesk',password: 'helpdesk',inicijator:0,prijavio: 0,odobrio: 0,izvrsio: 0,napravioIzmjenu: 0,ulogaId: 0},
      {id:1,firstName:'' ,lastName:'',username: 'developer',password: 'developer',inicijator:0,prijavio: 0,odobrio: 0,izvrsio: 0,napravioIzmjenu: 0,ulogaId: 1},
      {id:0,firstName:'' ,lastName:'',username: 'korisnik',password: 'korisnik',inicijator:0,prijavio: 0,odobrio: 0,izvrsio: 0,napravioIzmjenu: 0,ulogaId: 2},
      {id:0,firstName:'' ,lastName:'',username: 'komitet',password: 'komitet',inicijator:0,prijavio: 0,odobrio: 0,izvrsio: 0,napravioIzmjenu: 0,ulogaId: 3}
      ]
  //console.log(this.loginForm.value.username);
      this.getUsers();
  }
  closeModal() {
    this.activeModal.close(this.loginID);

  }
  get f() { 
    return this.loginForm.controls; }
    @HostListener('onSubmit')
  onSubmit(){
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        //return;
    }
    this.loginData.username =this.loginForm.value.username;
    this.loginData.password =this.loginForm.value.password;
    this.login();
  }
  async getUsers(){
    const data = await this.korisnikService.getKorisnici();
    this.users = data;
  }
  async login(){
    this.badLogin=false;
    const data = await this.authService.login(this.loginData).catch((reason:any)=>{this.badLogin=true;})
    if(!this.badLogin){
      this.badLogin=false;
      this.authService.token=data.token;
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(data.token);
      console.log(decodedToken);
      this.closeModal();
      console.log(decodedToken.ulogaId);
      switch(decodedToken.ulogaId){
        case 4:
          this.router.navigate(['../korisnik'])
          break;
        case 1:
          this.router.navigate(['../developer'])
          break;
        case 2:
          this.router.navigate(['../helpdesk'])
          break;
        case 3:
          this.router.navigate(['../komitet'])
          break;
        
      }
    }
  }
  
}
