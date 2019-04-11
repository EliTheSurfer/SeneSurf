import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-meteoCard',
  templateUrl: './meteoCard.component.html',
  styleUrls: ['./meteoCard.component.css']
})
export class MeteoCardComponent implements OnInit {

  @Input() foreCastUrl = '//fr.surf-forecast.com/breaks/Le-Virage/forecasts/widget/a | safe';
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
