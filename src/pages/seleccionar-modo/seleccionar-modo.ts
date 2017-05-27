import { EligeUnDestinoPage } from './../elige-un-destino/elige-un-destino';
import { LugaresPage } from './../lugares/lugares';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SeleccionarModoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-seleccionar-modo',
  templateUrl: 'seleccionar-modo.html',
})
export class SeleccionarModoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeleccionarModoPage');
  }

  modoAgente() {
    this.navCtrl.setRoot(EligeUnDestinoPage);
  }

  modoIndependiente() {
    this.navCtrl.setRoot(LugaresPage);
  }

}
