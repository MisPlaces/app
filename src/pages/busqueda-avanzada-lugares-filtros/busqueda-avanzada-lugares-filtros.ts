import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BusquedaAvanzadaLugaresFiltrosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-busqueda-avanzada-lugares-filtros',
  templateUrl: 'busqueda-avanzada-lugares-filtros.html',
})
export class BusquedaAvanzadaLugaresFiltrosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusquedaAvanzadaLugaresFiltrosPage');
  }

  aplicar() {
    this.navCtrl.pop();

  }

}
