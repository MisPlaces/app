import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Select } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Geolocation } from '@ionic-native/geolocation';
import { ItinerarioConfirmadoPage } from "../itinerario-confirmado/itinerario-confirmado";
import { ApiProvider } from './../../providers/api/api';
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
  played = false;
  translateTo = 'es';
  @ViewChild('selectLang') selectLang: Select;


  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    private geolocation: Geolocation,
    private tts: TextToSpeech,
    public apiProvider: ApiProvider,
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

  async speak() {
    let textToTranslate = "Juan, vamos a repasar tu itinerario. Tenemos una reserva en Iguazu Grand Hotel, desde el primero de enero del 2018 hasta el quince de enero del 2018. Las actividades que realizaremos en estos dias son: El día tres de enero del 2018 a las nueve horas iremos el parque nacional Iguazu. El dia cinco de enero del 2018 a las 18 horas iremos al Duty Free Shop Puerto Iguazú. El dia siete de enero del 2018 a las 21 horas iremos a cenar a El Quincho del Tio Querido. Que disfrute su viaje.";
    let loader = this.loadingCtrl.create({
      content: "Buscando traducción",
    });
    if (!this.played) {
      let text: string;
      if (this.translateTo == 'es') {
        text = textToTranslate;
      } else {
        loader.present();
        let texObj = await this.apiProvider.postTranslate(textToTranslate, 'es', this.translateTo, loader);

        if (texObj) {
          text = texObj[0];
        } else {
          text = 'no hay traducción';
        }
      }

      console.log(text);

      let locale = 'es-AR';
      if (this.translateTo == 'es') {
        locale = 'es-AR';
      } else if (this.translateTo == 'pt') {
        locale = 'pt-BR';
      } else if (this.translateTo == 'en') {
        locale = 'en-US';
      }
      this.played = true;
      this.tts.speak({
        text: text,
        locale: locale,
      }).then((data) => {
        this.played = false;
      });
    } else {
      this.tts.speak('').then((data) => {
        console.log(data)
      });
      this.played = false;
    }

  }


  openLanguajes() {
    this.selectLang.open();
  }

}
