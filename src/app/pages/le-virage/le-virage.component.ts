import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-le-virage',
  templateUrl: './le-virage.component.html',
  styleUrls: ['./le-virage.component.css']
})
export class LeVirageComponent implements OnInit {
  @Input() surfSpotName = 'Le virage';

  constructor() { }

  ngOnInit() {
  }

}
