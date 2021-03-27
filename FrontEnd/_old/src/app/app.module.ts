import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { ChangeStatusComponent } from './change-status/change-status.component';
import { DeveloperContentComponent } from './developer-content/developer-content.component';
import { DeveloperWrapperComponent } from './developer-wrapper/developer-wrapper.component';
import { HelpdeskChangesComponent } from './helpdesk-changes/helpdesk-changes.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { GuestComponent } from './guest/guest.component';
import { GuestWrapperComponent } from './guest-wrapper/guest-wrapper.component';
import { DeveloperContentListComponent } from './developer-content-list/developer-content-list.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';
import { HelpdeskEventsComponent } from './helpdesk-events/helpdesk-events.component';
import {ReportWrapperComponent} from './report-wrapper/report-wrapper.component'
import { ReportComponent } from './report/report.component';
import {ChartsModule} from 'ng2-charts';
import { ChangeRequestComponent } from './change-request/change-request.component';
import { CommitteeWrapperComponent } from './committee-wrapper/committee-wrapper.component';
import { ChangeCommitteeComponent } from './change-committee/change-committee.component';
import { IdeaComponent } from './idea/idea.component';
@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    NgbModule,
    HttpClientModule, 
    ReactiveFormsModule,
    ChartsModule,
    RouterModule.forRoot([
      {path:'', component:IdeaComponent},
      {path:'helpdesk', component: WrapperComponent},
      {path:'developer',component:DeveloperWrapperComponent},
      {path:'korisnik', component:GuestWrapperComponent},
      {path:'komitet', component:CommitteeWrapperComponent}
    ])
  ],
  declarations: [ AppComponent, HelloComponent, WrapperComponent, ChangeStatusComponent, DeveloperContentComponent, DeveloperWrapperComponent, HelpdeskChangesComponent, HeaderComponent, LoginComponent, GuestComponent, GuestWrapperComponent, DeveloperContentListComponent, FooterComponent, HelpdeskEventsComponent,ReportWrapperComponent,ReportComponent, ChangeRequestComponent, CommitteeWrapperComponent, ChangeCommitteeComponent, IdeaComponent ],
  bootstrap:    [ AppComponent ],
  providers: [NgbActiveModal,{provide: APP_BASE_HREF, useValue : '/' }],
  entryComponents: [LoginComponent],
  exports: [LoginComponent]
})
export class AppModule { }
