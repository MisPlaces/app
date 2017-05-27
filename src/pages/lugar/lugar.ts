import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicPage, NavController, NavParams, ToastController, Events, LoadingController } from 'ionic-angular';

/**
 * Generated class for the LugarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lugar',
  templateUrl: 'lugar.html',
})
export class LugarPage {

  loader: any;

  comentarios: Array<any>;
  imagenes: Array<any>;
  comentario: any;
  lugar: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public apiProvider: ApiProvider,
    private toastCtrl: ToastController,
    public events: Events,
    private geolocation: Geolocation,
    public loadingCtrl: LoadingController) {

    this.lugar = this.navParams.get('lugar');

    let resource = `lugares/${this.lugar.id}/recomendaciones`;

    this.presentLoading();

    this.apiProvider.getAll(resource)
      .then(
      (data) => {
        console.log(data);
        this.comentarios = data;
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

    // this.comentarios = [
    //   { "nombre": "sergio", "apellido": "sanabria", "texto": "hola", "avatar": "https://pbs.twimg.com/profile_images/732548853879070720/zFzX7xd4_bigger.jpg" },
    //   { "nombre": "sergio", "apellido": "sanabria", "texto": "comenten", "avatar": "https://pbs.twimg.com/profile_images/732548853879070720/zFzX7xd4_bigger.jpg" },
    //   { "nombre": "sergio", "apellido": "sanabria", "texto": "aca un calor", "avatar": "https://pbs.twimg.com/profile_images/732548853879070720/zFzX7xd4_bigger.jpg" },
    //   { "nombre": "sergio", "apellido": "sanabria", "texto": "hola, hola hola hola hola", "avatar": "https://pbs.twimg.com/profile_images/732548853879070720/zFzX7xd4_bigger.jpg" },
    // ]

    this.imagenes = [
      { "thumb": "http://www.conocermisiones.com/images/com_sobi2/gallery/43/43_image_8.jpg" },
      { "thumb": "https://media-cdn.tripadvisor.com/media/photo-s/05/6f/b1/ef/salto-tabay.jpg" },
      { "thumb": "http://www.elterritorio.com.ar/verimg.aspx?F=1&A=810&O=/img/1/111/4954964444085159_1.jpg" },
      { "thumb": "http://www.conocermisiones.com/images/com_sobi2/gallery/43/43_image_8.jpg" },
      { "thumb": "https://media-cdn.tripadvisor.com/media/photo-s/05/6f/b1/ef/salto-tabay.jpg" },
      { "thumb": "http://www.elterritorio.com.ar/verimg.aspx?F=1&A=810&O=/img/1/111/4954964444085159_1.jpg" },
      { "thumb": "http://www.conocermisiones.com/images/com_sobi2/gallery/43/43_image_8.jpg" },
      { "thumb": "https://media-cdn.tripadvisor.com/media/photo-s/05/6f/b1/ef/salto-tabay.jpg" },
      { "thumb": "http://www.elterritorio.com.ar/verimg.aspx?F=1&A=810&O=/img/1/111/4954964444085159_1.jpg" },
      { "thumb": "http://www.conocermisiones.com/images/com_sobi2/gallery/43/43_image_8.jpg" },
      { "thumb": "https://media-cdn.tripadvisor.com/media/photo-s/05/6f/b1/ef/salto-tabay.jpg" },
      { "thumb": "http://www.elterritorio.com.ar/verimg.aspx?F=1&A=810&O=/img/1/111/4954964444085159_1.jpg" },
    ]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LugarPage');
  }

  comentar() {
    this.comentarios.push(
      { "nombre": "sergio", "apellido": "sanabria", "texto": this.comentario, "avatar": "https://pbs.twimg.com/profile_images/732548853879070720/zFzX7xd4_bigger.jpg" },
    );
    this.comentario = '';
  }

  checkIn() {

  }


  meGusta() {
    this.lugar.cuenta_me_gusta += 1;
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

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

  comoLlegar() {
    this.presentLoading();
    this.geolocation.getCurrentPosition().then((resp) => {
      let ways = [];

      ways.push(resp.coords.latitude + ", " + resp.coords.longitude);

      ways.push(this.lugar.latitud + ", " + this.lugar.longitud);

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
