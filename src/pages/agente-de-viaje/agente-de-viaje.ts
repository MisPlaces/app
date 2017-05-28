import { LugaresChoicePage } from './../lugares-choice/lugares-choice';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActividadesPage } from '../actividades/actividades';
import { SalidaNocturnaPage } from '../salida-nocturna/salida-nocturna';
import { RestaurantesPage } from '../restaurantes/restaurantes';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-agente-de-viaje',
  templateUrl: 'agente-de-viaje.html'
})
export class AgenteDeViajePage {

  lugar: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lugar = this.navParams.get('lugar');

    console.log(this.lugar);
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
