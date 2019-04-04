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
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { ShopComponent } from './pages/shop/shop.component';
import { PrestationsComponent } from './pages/prestations/prestations.component';
import { MeteoCardComponent } from './meteoCard/meteoCard.component';


const appRoutes: Routes = [
   { path: 'le-virage', component: LeVirageComponent },
   { path: 'evenements', component: EventsPageComponent },
   { path: 'restaurants', component: RestaurantsComponent },
   { path: 'boutique', component: ShopComponent },
   { path: 'prestations', component: PrestationsComponent },
   { path: '**', component: LeVirageComponent }

 ];

@NgModule({
   declarations: [
      AppComponent,
      CardComponent,
      NavbarComponent,
      LeVirageComponent,
      EventsPageComponent,
      RestaurantsComponent,
      ShopComponent,
      PrestationsComponent,
      MeteoCardComponent
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
