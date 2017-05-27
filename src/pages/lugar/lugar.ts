import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  comentarios: Array<any>;
  imagenes: Array<any>;
  comentario: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.comentarios = [
      { "nombre": "sergio", "apellido": "sanabria", "texto": "hola", "avatar": "https://pbs.twimg.com/profile_images/732548853879070720/zFzX7xd4_bigger.jpg" },
      { "nombre": "sergio", "apellido": "sanabria", "texto": "comenten", "avatar": "https://pbs.twimg.com/profile_images/732548853879070720/zFzX7xd4_bigger.jpg" },
      { "nombre": "sergio", "apellido": "sanabria", "texto": "aca un calor", "avatar": "https://pbs.twimg.com/profile_images/732548853879070720/zFzX7xd4_bigger.jpg" },
      { "nombre": "sergio", "apellido": "sanabria", "texto": "hola, hola hola hola hola", "avatar": "https://pbs.twimg.com/profile_images/732548853879070720/zFzX7xd4_bigger.jpg" },
    ]

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

}
