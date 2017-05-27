import { LugaresChoicePage } from './../lugares-choice/lugares-choice';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActividadesPage } from '../actividades/actividades';
import { SalidaNocturnaPage } from '../salida-nocturna/salida-nocturna';
import { RestaurantesPage } from '../restaurantes/restaurantes';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-agente-de-viaje',
  templateUrl: 'agente-de-viaje.html'
})
export class AgenteDeViajePage {

  constructor(public navCtrl: NavController) {
  }
  goToLugares(params) {
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
}
