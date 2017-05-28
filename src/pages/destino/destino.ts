import { AgenteDeViajePage } from './../agente-de-viaje/agente-de-viaje';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { MapService } from '../../directives/map/map.service';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';

/**
 * Generated class for the DestinoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-destino',
  templateUrl: 'destino.html',
})
export class DestinoPage {

  search = '';
  map: any;
  marker: any;
  loader: any;
  @ViewChild('contenedorMapaDestino') contenedorMapa: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
    private nativeGeocoder: NativeGeocoder, private geolocation: Geolocation, public mapService: MapService,
  ) {

    this.presentLoading();
    this.geolocation.getCurrentPosition().then((resp) => {

      console.log(resp);

      let mapId = 'mapa-destino-id';
      // let zoom = 15;

      this.contenedorMapa.nativeElement.innerHTML = '<div class="angular-leaflet-map" style="height:60%;" id="' + mapId + '"></div>';

      this.map = this.mapService.createMap(mapId, resp.coords.latitude, resp.coords.longitude);
      let latlng = [];
      latlng.push(resp.coords.latitude);
      latlng.push(resp.coords.longitude);
      this.marker = this.mapService.addMarker(latlng, "Tu ubicación");
      this.dismissLoading();
    }).catch((error) => {
      this.dismissLoading();
      console.log('Error getting location', error);
      console.log(error);


    });
  }

  onInput() {

    this.presentLoading();
    this.nativeGeocoder.forwardGeocode(this.search)
      .then((coordinates: NativeGeocoderForwardResult) => {
        this.map.removeLayer(this.marker);

        this.mapService.setPosition(coordinates.latitude, coordinates.longitude);

        let latlng = [];
        latlng.push(coordinates.latitude);
        latlng.push(coordinates.longitude);
        this.marker = this.mapService.addMarker(latlng, false);
        this.dismissLoading();
      })
      .catch((error: any) => {
        console.log(error);
        this.dismissLoading();
      });
  }

  goToAgenteDeViaje() {
    this.navCtrl.push(AgenteDeViajePage);
  }

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

}
