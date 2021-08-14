import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcertListComponent } from './components/concert-list/concert-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ListenComponent } from './components/listen/listen.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'listen', component: ListenComponent },
  { path: 'concerts', component: ConcertListComponent },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
