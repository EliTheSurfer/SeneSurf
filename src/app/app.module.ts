import { LeVirageComponent } from './pages/le-virage/le-virage.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


const appRoutes: Routes = [
   { path: 'le-virage', component: LeVirageComponent },
   { path: '**', component: LeVirageComponent }

 ];

@NgModule({
   declarations: [
      AppComponent,
      CardComponent,
      NavbarComponent,
      LeVirageComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(
         appRoutes,
       ),
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
