import { ApiProvider } from './../../providers/api/api';
import { LugaresChoicePage } from './../lugares-choice/lugares-choice';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AgenteDeViajePage } from '../agente-de-viaje/agente-de-viaje';
import { ActividadesPage } from '../actividades/actividades';
import { SalidaNocturnaPage } from '../salida-nocturna/salida-nocturna';
import { RestaurantesPage } from '../restaurantes/restaurantes';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-elige-un-destino',
  templateUrl: 'elige-un-destino.html'
})
export class EligeUnDestinoPage {
  lugar = '';

  lugares = [];

  firts = false;

  constructor(public navCtrl: NavController, private api: ApiProvider) {
  }
  goToAgenteDeViaje(lugar) {
    this.navCtrl.push(AgenteDeViajePage, {
      lugar: lugar
    });
  } goToLugares(params) {
    if (!params) params = {};
    this.navCtrl.push(LugaresChoicePage);
  } goToActividades(params) {
    if (!params) params = {};
    this.navCtrl.push(ActividadesPage);
  } goToSalidaNocturna(params) {
    if (!params) params = {};
    this.navCtrl.push(SalidaNocturnaPage);
  } goToRestaurantes(params) {
    if (!params) params = {};
    this.navCtrl.push(RestaurantesPage);
  } goToMenu(params) {
    if (!params) params = {};
    this.navCtrl.push(MenuPage);
  }

  buscarLugar() {
    this.lugar = this.lugar.replace(/[^A-Za-z0-9 ]/g, '');
    if (this.lugar) {
      this.firts = true;
      this.api.getPlacesMapBox(this.lugar).then((json) => {
        this.lugares = json.features;
      });
    } else {
      this.lugares = [];
    }

  }

}
