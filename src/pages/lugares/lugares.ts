import { LugarPage } from './../lugar/lugar';
import { LugaresMapaPage } from './../lugares-mapa/lugares-mapa';
import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Geolocation } from '@ionic-native/geolocation';
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
        private geolocation: Geolocation,
        public loadingCtrl: LoadingController) {

        this.init();


    }

    init(refresher?) {
        let resource = 'lugares';
        this.presentLoading();
        this.apiProvider.getAll('categorias')
            .then(
            (data) => {
                console.log(data);
                this.categorias = data;
                this.apiProvider.getAll(resource)
                    .then(
                    (data) => {
                        console.log(data);
                        this.lugares = data;
                        if (typeof refresher !== "undefined") {
                            refresher.complete();
                        }
                        this.dismissLoading();
                    },
                    err => this.handleError.bind(this)
                    );
            },
            err => this.handleError.bind(this)
            );

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
                this.navCtrl.push(LugarPage, {
                    lugar: l
                });
                return;
            }
        }

        this.presentToast('Lugar no encontrado!');
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

    doRefresh(refresher) {
        this.init(refresher.complete());

    }

    abrirMapa() {
        this.navCtrl.push(LugaresMapaPage, {
            lugares: this.lugares
        });
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

    rutaGmap() {
        this.presentLoading();
        this.geolocation.getCurrentPosition().then((resp) => {
            let ways = [];

            ways.push(resp.coords.latitude + ", " + resp.coords.longitude);
            for (let l of this.lugares) {

                ways.push(l.latitud + ", " + l.longitud);
            }

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
