import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RatingModule } from 'ngx-bootstrap/rating';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { AvaliacaoComponent } from './components/avaliacao/avaliacao.component';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';
import { ProcessoComponent } from './components/processo/processo.component';
import { FazerComponent } from './components/fazer/fazer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//  de6d5ebb7252badc0483771a7c6cae5de205aa11

@NgModule({
  declarations: [AppComponent, LoginComponent, AvaliacaoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RatingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
