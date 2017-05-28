import { BuscarLugaresPage } from './../buscar-lugares/buscar-lugares';
import { LugarPage } from './../lugar/lugar';
import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { NavController, ToastController, Events, LoadingController } from 'ionic-angular';
import { ActividadesPage } from '../actividades/actividades';
import { SalidaNocturnaPage } from '../salida-nocturna/salida-nocturna';
import { RestaurantesPage } from '../restaurantes/restaurantes';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-lugares-choice',
  templateUrl: 'lugares-choice.html'
})
export class LugaresChoicePage {

  loader: any;
  hoteles: any;
  posadas: any;

  constructor(
    public navCtrl: NavController,
    public apiProvider: ApiProvider,
    private toastCtrl: ToastController,
    public events: Events,
    public loadingCtrl: LoadingController) {

    this.loadHoteles();
    // this.loadPosadas();

  }

  loadHoteles() {
    let resource = 'hoteles';
    this.presentLoading();
    this.apiProvider.getAll(resource)
      .then(
      (data) => {
        console.log('hoteles', data);
        this.hoteles = data;
        this.dismissLoading();
        this.loadPosadas();

      },
      err => this.handleError.bind(this)
      );
  }

  loadPosadas() {
    let resource = 'posadas';
    this.presentLoading();
    this.apiProvider.getAll(resource)
      .then(
      (data) => {
        console.log('posadas', data);
        this.posadas = data;
        this.dismissLoading();
      },
      err => this.handleError.bind(this)
      );
  }

  openBuscar() {
    this.navCtrl.push(BuscarLugaresPage);
  }

  verLugar(lugar) {
    this.navCtrl.push(LugarPage, {
      'lugar': lugar
    });
  }

  goToActividades(params) {
    if (!params) params = {};
    this.navCtrl.push(ActividadesPage);
  } goToSalidaNocturna(params) {
    if (!params) params = {};
    this.navCtrl.push(SalidaNocturnaPage);
  } goToRestaurantes(params) {
    if (!params) params = {};
    this.navCtrl.push(RestaurantesPage);
  } goToMenu(params) {
    if (!params) params = {};
    this.navCtrl.push(MenuPage);
  }

  handleError(err) {
    if (err.status == 401) {
      this.presentToast('Sesión expirada');
      this.events.publish('user:logout');
    }
    if (err.status == 404) {
      this.presentToast(JSON.parse(err._body).message)
      this.navCtrl.pop();
    }
    this.dismissLoading();
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

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}
