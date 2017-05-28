import { SeleccionarModoPage } from './../seleccionar-modo/seleccionar-modo';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, Events } from 'ionic-angular';
import { HomePage } from "../home/home";
import { Config } from "../../app/config/config";
import { AuthProvider } from "../../providers/auth/auth";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TimeoutError } from "rxjs/Rx";

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class Login {

    private clientId: any;
    private clientSecret: any;
    private loader: any;

    private loginForm: FormGroup;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public _config: Config,
        public authService: AuthProvider,
        private formBuilder: FormBuilder,
        public toastCtrl: ToastController,
        public events: Events,
        public loadingCtrl: LoadingController) {

        this.clientId = _config.get('client_id');
        this.clientSecret = _config.get('client_secret');

        this.loginForm = this.formBuilder.group({
            usuario: ['', Validators.required],
            password: ['', Validators.required],
        });

    }


    ionViewDidLoad() {

        console.log('ionViewDidLoad Login');

        // this.showLoader();

        //Check if already authenticated
        this.authService.checkAuthentication()
            .then(
            (res) => {
                console.log("Already authorized");
                this.events.publish('user:login');
                // this.loading.dismiss();
                this.navCtrl.setRoot(SeleccionarModoPage);
            }
            ).catch(this.handleError.bind(this));

    }

    iniciarSesion() {

        this.presentLoading('Ingresando');
        // this.navCtrl.setRoot(HomePage);
        this.navCtrl.setRoot(SeleccionarModoPage);
        this.loader.dismiss();

        // let credentials = {
        //     "grant_type": 'password',
        //     "client_id": this.clientId,
        //     "client_secret": this.clientSecret,
        //     "username": this.loginForm.value.usuario,
        //     "password": this.loginForm.value.password
        // };

        // this.presentLoading('Ingresando');

        // this.authService.login(credentials).then(
        //     (result) => {
        //         console.log(result);
        //         this.navCtrl.setRoot(HomePage);
        //         this.events.publish('user:login');
        //         this.loader.dismiss();
        //     }
        // ).catch(this.handleError.bind(this));
    }

    presentToast(msg) {
        let toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    }

    presentLoading(msg) {
        this.loader = this.loadingCtrl.create({
            content: msg
        });
        this.loader.present();
    }

    dismissLoading() {
        if (this.loader) {
            this.loader.dismiss();
        }
    }

    handleError(error: Response | any) {
        if (error instanceof TimeoutError) {
            let msg = 'No se puede conectar con el servidor';
            console.log(msg)
            this.presentToast(msg)
        }
        this.dismissLoading();
        console.log('atutu', error)
    };

}
