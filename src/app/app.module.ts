import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { Pagina2Component } from './component/pagina2/pagina2.component';
import { AvaliacaoComponent } from './components/avaliacao/avaliacao.component';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';
import { ProcessoComponent } from './components/processo/processo.component';
import { FazerComponent } from './components/fazer/fazer.component';

 de6d5ebb7252badc0483771a7c6cae5de205aa11

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    PageNotFoundComponentComponent,
    Pagina2Component,
    AvaliacaoComponent,
    PesquisaComponent,
    ProcessoComponent,
    FazerComponent

    LoginComponent
6d5ebb7252badc0483771a7c6cae5de205aa11
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
