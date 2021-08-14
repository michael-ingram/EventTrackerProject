import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { ConcertsService } from './services/concerts.service';
import { ConcertListComponent } from './components/concert-list/concert-list.component';
import { HomeComponent } from './components/home/home.component';

import { ContactComponent } from './components/contact/contact.component';
import { ListenComponent } from './components/listen/listen.component';

@NgModule({
  declarations: [
    AppComponent,
    ConcertListComponent,
    HomeComponent,
    ContactComponent,
    ListenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ConcertsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
