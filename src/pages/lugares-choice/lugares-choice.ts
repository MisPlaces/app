import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActividadesPage } from '../actividades/actividades';
import { SalidaNocturnaPage } from '../salida-nocturna/salida-nocturna';
import { RestaurantesPage } from '../restaurantes/restaurantes';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-lugares-choice',
  templateUrl: 'lugares-choice.html'
})
export class LugaresChoicePage {

  constructor(public navCtrl: NavController) {
  }
  goToActividades(params){
    if (!params) params = {};
    this.navCtrl.push(ActividadesPage);
  }goToSalidaNocturna(params){
    if (!params) params = {};
    this.navCtrl.push(SalidaNocturnaPage);
  }goToRestaurantes(params){
    if (!params) params = {};
    this.navCtrl.push(RestaurantesPage);
  }goToMenu(params){
    if (!params) params = {};
    this.navCtrl.push(MenuPage);
  }
}
