import { Component, Input, OnDestroy } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import { Subscription } from 'rxjs';


@Component({
  selector: 'surfSpot-page',
  templateUrl: './surfSpot-page.component.html',
  styleUrls: ['./surfSpot-page.component.css']
})
export class SurfSpotComponent implements OnDestroy {
  @Input() surfSpotName: string;
  foreCastUrl: string;
  routerEventSubscription: Subscription;
  constructor(private router: Router) {
    enum surfSpotEnum {
      'Le-Virage' =  'Le Virage',
      'Vivier' =  'Vivier',
      'Yoff-Beach' =  'Plage de Yoff',
      'Baiedes-Carpes' =  'Baie des carpes',
      'Corniche-Ouest' =  'Corniche Ouest',
    }

    this.routerEventSubscription = this.router.events
      .filter((routerEvent: RouterEvent) => routerEvent !== undefined && routerEvent.url !== undefined)
      .map((routerEvent: RouterEvent) => routerEvent.url.split('/')[2])
      .subscribe((surfSpotName: string = 'Le-Virage') => {
        this.surfSpotName = surfSpotEnum[surfSpotName];
        this.foreCastUrl = `//fr.surf-forecast.com/breaks/${surfSpotName}/forecasts/widget/a | safe`;
      });
  }

  ngOnDestroy() {
    this.routerEventSubscription.unsubscribe();
  }
}
