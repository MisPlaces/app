import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SalidaNocturnaPage } from '../salida-nocturna/salida-nocturna';
import { RestaurantesPage } from '../restaurantes/restaurantes';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-actividades',
  templateUrl: 'actividades.html'
})
export class ActividadesPage {

  constructor(public navCtrl: NavController) {
  }
  goToSalidaNocturna(params){
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
