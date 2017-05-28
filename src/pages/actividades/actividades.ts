import { BuscarLugaresPage } from './../buscar-lugares/buscar-lugares';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-actividades',
  templateUrl: 'actividades.html'
})
export class ActividadesPage {

  constructor(public navCtrl: NavController) {
  }
  goTo(params, finaliza?) {
    this.navCtrl.push(BuscarLugaresPage, {
      'categoria': params,
      'finaliza': finaliza
    });
  }

}
