import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoadingController, NavController, NavParams, Select } from 'ionic-angular';
import { MapService } from '../../directives/map/map.service';
import { GeocodingService } from "../../directives/map/geocode.service";
import { Geolocation } from '@ionic-native/geolocation';



@Component({
  selector: 'page-lugares-mapa',
  templateUrl: 'lugares-mapa.html',
})
export class LugaresMapaPage {

  @ViewChild('contenedorMapaLugares') contenedorMapa: ElementRef;
  @ViewChild('searchKm') searchKm: Select;

  // domAdapter: BrowserDomAdapter = new BrowserDomAdapter();
  lugares = [];
  kms = {
    km: 5,
    zoom: 13,
  };
  map: any;

  distancias = [
    {
      km: 5,
      zoom: 13,
      descripcion: 'Menos de 5 kms.',
    },
    {
      km: 10,
      zoom: 11,
      descripcion: 'Menos de 10 kms.',
    },
    {
      km: 50,
      zoom: 9,
      descripcion: 'Menos de 50 kms.',
    },
    {
      km: 100,
      zoom: 8,
      descripcion: 'Menos de 100 kms.',
    },
    {
      km: 300,
      zoom: 7,
      descripcion: 'Menos de 300 kms.',
    },
    {
      km: -1,
      zoom: 6,
      descripcion: 'Más de kms.',
    }

  ]
  constructor(public params: NavParams,
    public navCtrl: NavController,
    public loadCtrl: LoadingController,
    public mapService: MapService,
    public elementRef: ElementRef,
    private geolocation: Geolocation,
    public geocoder: GeocodingService) {
    this.lugares = this.params.get('lugares');

  }


  ionViewDidEnter() {


    this.rangeChange();
  }



  opensearchKm() {
    this.searchKm.open();
  }

  rangeChange() {

    var loader = this.loadCtrl.create({
      content: "Espere, por favor"
    });

    loader.present();

    this.geolocation.getCurrentPosition().then((resp) => {

      console.log(resp);

      this.createMakers(resp.coords.latitude, resp.coords.longitude, loader);

      this.mapService.setPosition(resp.coords.latitude, resp.coords.longitude);
      this.mapService.setBound(resp.coords.latitude - 0.02, resp.coords.longitude - 0.02, resp.coords.latitude + 0.02, resp.coords.longitude + 0.02);
    }).catch((error) => {

      loader.dismissAll();
      console.log('Error getting location', error);
      console.log(error);


    });
  }

  createMakers(latD, lonD, loader) {

    let mapId = 'mapa-lugares-id';
    let zoom = this.kms.zoom;

    // if (!utils.isUndefined(this.map)) {
    //     zoom = this.map.getZoom();
    //
    // }

    this.contenedorMapa.nativeElement.innerHTML = '<div class="angular-leaflet-map" id="' + mapId + '"></div>';

    this.map = this.mapService.createMap(mapId, latD, lonD);

    this.map.setZoom(zoom);

    this.mapService.createCircle(latD, lonD, this.kms.km);

    for (let e of this.lugares) {

      if (this.lugares[this.lugares.length - 1] == e) {
        loader.dismissAll();
      }


      let lng = e.longitud;
      let lat = e.latitud;

      let latlng = [];
      latlng.push(lat);
      latlng.push(lng);


      let kms = this.mapService.getDistanceFromLatLonInKm(latD, lonD, lat, lng);

      if (this.kms.km > 0 && kms > this.kms.km) {
        return;
      }


      let newDiv: HTMLDivElement;
      newDiv = document.createElement("div");
      let newContent = document.createTextNode(e.nombre.toUpperCase());


      // let img: HTMLImageElement;
      // img = document.createElement('img');
      // newDiv.style.color = e.color;
      // newDiv.appendChild(newContent);
      // newDiv.appendChild(img);

      //console.log(e.image_name)
      // img.src = e.image_name ? e.image_name : 'assets/img/icono_empresa.png';
      //img.src = "http://www.goleamos.com/post/boca.png";
      // this.domAdapter.on(newDiv, 'click', this.open.bind(this, e));
      // this.domAdapter.appendChild(this.elementRef.nativeElement, newDiv);

      this.mapService.addMarker(latlng, newDiv);

      //this.mapService.addText(e.nombre);

    }
  }

  open(lugar) {
    // TODO: se deberia abrir la page de lugar
    // this.navCtrl()
  }

}
