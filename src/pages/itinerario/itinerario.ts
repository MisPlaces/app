import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ItinerarioConfirmadoPage } from "../itinerario-confirmado/itinerario-confirmado";
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

  loader: any;
  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    private geolocation: Geolocation,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItinerarioPage');
  }

  irAConfirmacion() {
    this.navCtrl.push(ItinerarioConfirmadoPage);
  }

  // funciones fijas
  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Cargando...",
    });
    this.loader.present();
  }

  dismissLoading() {

    console.log(this.loader);
    if (this.loader) {
      this.loader.dismiss();
    }

  }


  comoLlegar() {
    this.presentLoading();
    this.geolocation.getCurrentPosition().then((resp) => {
      let ways = [];

      ways.push(resp.coords.latitude + ", " + resp.coords.longitude);

      ways.push("-25.6056125 , -54.5655548");

      ways.push("-25.6002357 , 	-54.5777312");

      ways.push("-25.5993673 	-54.5656586");

      ways.push("-25.6062552 	-54.567845");

      let url = "https://www.google.com/maps/dir/" + ways.join('/');;

      this.loader.dismissAll();

      window.open(url, "_system");
    }).catch((error) => {

      this.loader.dismissAll();
      console.log('Error getting location', error);
      console.log(error);


    });

  }

}
