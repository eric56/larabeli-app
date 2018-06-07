import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ModalComponent } from './modal/modal.component';
import { AboutComponent } from './about/about.component';
import { SocialNetworkComponent } from './social-network/social-network.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    ServiceComponent,
    PortfolioComponent,
    ModalComponent,
    AboutComponent,
    SocialNetworkComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule
  ],
  providers: [
    BsModalService,
    BsModalRef
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalComponent,
  ]
})
export class AppModule { }