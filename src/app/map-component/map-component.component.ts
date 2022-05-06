import { Component, OnDestroy, OnInit } from '@angular/core';

import * as leaflet from 'leaflet';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.scss']
})
export class MapComponentComponent implements OnInit, OnDestroy {

  mapa: any;

  constructor() { }

  ngOnInit(): void {
    console.log("OnInit")
    this.mapa = leaflet.map('mapa').setView([35.403430, 17.681967], 3);
    leaflet.tileLayer(env.MAPA_TITLE_LAYER, { maxZoom: 19})
  }

  ngOnDestroy(): void {
    this.mapa.invalidateSize();
  }

}
