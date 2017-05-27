import { LugarPage } from './../lugar/lugar';
import { LugaresMapaPage } from './../lugares-mapa/lugares-mapa';
import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NavController, NavParams, ToastController, Events, LoadingController } from 'ionic-angular';

@Component({
    selector: 'page-lugares',
    templateUrl: 'lugares.html'
})
export class LugaresPage {

    private lugares: Array<any>;
    private categorias: Array<any>;
    private loader: any;
    private search = '';
    private categoriaSel: any;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public apiProvider: ApiProvider,
        private toastCtrl: ToastController,
        public events: Events,
        private barcodeScanner: BarcodeScanner,
        public loadingCtrl: LoadingController) {


        let resource = 'lugares';
        this.presentLoading();
        this.apiProvider.getAll('categorias')
            .then(
            (data) => {
                console.log(data);
                this.categorias = data;
            },
            err => {
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
            );
        this.apiProvider.getAll(resource)
            .then(
            (data) => {
                console.log(data);
                this.lugares = data;
                this.dismissLoading();
            },
            err => {
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
            );
    }

    presentLoading() {
        this.loader = this.loadingCtrl.create({
            content: "Cargando...",
        });
        this.loader.present();
    }

    dismissLoading() {
        this.loader.dismiss();
    }

    itemSelected(item) {
        this.navCtrl.push(LugarPage, {
            'lugar': item
        });
    }

    presentToast(msg) {
        let toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    }

    findLugar(id) {
        for (let l of this.lugares) {
            console.log(l.id);
            if (id == l.id) {
                this.presentToast('Lugar encontrado!');
                //this.presentAtraccionModal(atraccion);
            } else {
                this.presentToast('Lugar mo encontrado!');
            }
        }
    }

    scan() {
        this.barcodeScanner.scan({
            resultDisplayDuration: 0
        }).then(
            (barcodeData) => {


                //alert(JSON.stringify(barcodeData));

                if (!barcodeData.cancelled) {

                    this.findLugar(barcodeData.text);
                }
            }
            );
    }

    abrirMapa() {
        this.navCtrl.push(LugaresMapaPage, {
            lugares: this.lugares
        });
    }


}