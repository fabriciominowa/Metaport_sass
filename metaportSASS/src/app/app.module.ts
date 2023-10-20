import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Views/header/header.component';
import { HomeComponent } from './Views/home/home.component';
import { FooterComponent } from './Views/footer/footer.component';
import { WebComponent } from './Views/web/web.component';
import { GamesComponent } from './Views/games/games.component';
import { VRComponent } from './Views/vr/vr.component';
import { NomeDoSeuComponenteComponent } from './nome-do-seu-componente/nome-do-seu-componente.component';
import { DownloadService } from './Views/download.service';
import { AboutComponent } from './Views/about/about.component';
import { ProjectComponent } from './Views/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    WebComponent,
    GamesComponent,
    VRComponent,
    NomeDoSeuComponenteComponent,
    AboutComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [DownloadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
