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

  constructor(public navCtrl: NavController) {
  }
  goToAgenteDeViaje(params) {
    if (!params) params = {};
    this.navCtrl.push(AgenteDeViajePage);
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
}
