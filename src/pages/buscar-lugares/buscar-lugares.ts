import { BusquedaAvanzadaLugaresFiltrosPage } from './../busqueda-avanzada-lugares-filtros/busqueda-avanzada-lugares-filtros';
import { LugarPage } from './../lugar/lugar';
import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController, ToastController } from 'ionic-angular';

/**
 * Generated class for the BuscarLugaresPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-buscar-lugares',
  templateUrl: 'buscar-lugares.html'
})
export class BuscarLugaresPage {
  lugares: any;
  loader: any;
  search: any;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public apiProvider: ApiProvider,
    private toastCtrl: ToastController,
    public events: Events,
    public loadingCtrl: LoadingController) {



    let resource = 'lugares';
    this.presentLoading();
    this.apiProvider.getAll(resource)
      .then(
      (data) => {
        console.log(data);
        this.lugares = data;
        // disparo el filtrador
        if (this.navParams.get('categoria')) {
          this.search = this.navParams.get('categoria');
          this.transform();
        }

        this.dismissLoading();
      },
      err => this.handleError.bind(this)
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarLugaresPage');
  }

  itemSelected(item) {
    this.navCtrl.push(LugarPage, {
      'lugar': item
    });
  }

  openBuscar() {
    this.navCtrl.push(BusquedaAvanzadaLugaresFiltrosPage);
  }

  transform() {

    // if (!(typeof this.search === "undefined") && !(typeof arg1 === "undefined") && !(typeof arg2 === "undefined")) {
    if (this.search) {
      // console.log(arg2);
      this.lugares = this.lugares.filter((item) => {
        let str = JSON.stringify(item);
        str = str.toLowerCase();
        this.search = this.search ? this.search.toLowerCase() : '';
        // arg2 = arg2 ? arg2.toLowerCase() : '';

        return str.indexOf(this.search) >= 0;

      });
    }
    // filter items array, items which match and return true will be kept, false will be filtered out

  }

  findLugar(id) {
    for (let l of this.lugares) {
      console.log(l.id);
      if (id == l.id) {
        this.presentToast('Lugar encontrado!');
        this.navCtrl.push(LugarPage, {
          lugar: l
        });
        return;
      }
    }

    this.presentToast('Lugar no encontrado!');
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



}
