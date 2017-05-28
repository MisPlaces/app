import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ItinerarioConfirmadoPage} from "../itinerario-confirmado/itinerario-confirmado";
/**
 * Generated class for the ItinerarioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-itinerario',
  templateUrl: 'itinerario.html',
})
export class ItinerarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItinerarioPage');
  }

  irAConfirmacion(){
    this.navCtrl.push(ItinerarioConfirmadoPage);
  }

}
