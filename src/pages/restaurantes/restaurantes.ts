import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-restaurantes',
  templateUrl: 'restaurantes.html'
})
export class RestaurantesPage {

  constructor(public navCtrl: NavController) {
  }
  goToMenu(params){
    if (!params) params = {};
    this.navCtrl.push(MenuPage);
  }
}
