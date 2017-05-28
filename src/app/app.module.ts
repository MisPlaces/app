import { ComidaFiltrosPageModule } from './../pages/comida-filtros/comida-filtros.module';
import { ItinerarioConfirmadoPageModule } from './../pages/itinerario-confirmado/itinerario-confirmado.module';
import { ItinerarioPageModule } from './../pages/itinerario/itinerario.module';
import { BusquedaAvanzadaLugaresFiltrosPageModule } from './../pages/busqueda-avanzada-lugares-filtros/busqueda-avanzada-lugares-filtros.module';
import { BuscarLugaresPageModule } from './../pages/buscar-lugares/buscar-lugares.module';
import { SalidaNocturnaPageModule } from './../pages/salida-nocturna/salida-nocturna.module';
import { RestaurantesPageModule } from './../pages/restaurantes/restaurantes.module';
import { MenuPageModule } from './../pages/menu/menu.module';
import { LugaresChoiceModule } from './../pages/lugares-choice/lugares-choice.module';
import { EligeUnDestinoPageModule } from './../pages/elige-un-destino/elige-un-destino.module';
import { CheckoutPageModule } from './../pages/checkout/checkout.module';
import { AgenteDeViajePageModule } from './../pages/agente-de-viaje/agente-de-viaje.module';
import { ActividadesPageModule } from './../pages/actividades/checkout.module';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { DestinoPageModule } from './../pages/destino/destino.module';
import { SeleccionarModoPageModule } from './../pages/seleccionar-modo/seleccionar-modo.module';
import { PreguntasPageModule } from './../pages/preguntas/preguntas.module';
import { GeocodingService } from './../directives/map/geocode.service';
import { Geolocation } from '@ionic-native/geolocation';
import { MapService } from './../directives/map/map.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { LugaresPageModule } from './../pages/lugares/lugares.module';
import { LugaresMapaPageModule } from './../pages/lugares-mapa/lugares-mapa.module';
import { LugarPageModule } from './../pages/lugar/lugar.module';
import { ApiProvider } from './../providers/api/api';
import { AuthProvider } from './../providers/auth/auth';
import { Config } from './config/config';
import { LoginModule } from './../pages/login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from "@angular/http";
import { IonicStorageModule } from "@ionic/storage";
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    LoginModule,
    LugaresPageModule,
    LugarPageModule,
    LugaresMapaPageModule,
    PreguntasPageModule,
    SeleccionarModoPageModule,
    // lo de los pibes
    ActividadesPageModule,
    AgenteDeViajePageModule,
    CheckoutPageModule,
    EligeUnDestinoPageModule,
    LugaresChoiceModule,
    MenuPageModule,
    RestaurantesPageModule,
    SalidaNocturnaPageModule,
    IonicModule.forRoot(MyApp),
    DestinoPageModule,
    BuscarLugaresPageModule,
    ItinerarioPageModule,
    ItinerarioConfirmadoPageModule,
    ComidaFiltrosPageModule,
    BusquedaAvanzadaLugaresFiltrosPageModule,
    IonicStorageModule.forRoot({
      name: '__misplaces',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Config,
    AuthProvider,
    ApiProvider,
    BarcodeScanner,
    Geolocation,
    MapService,
    GeocodingService,
    NativeGeocoder,
    TextToSpeech
  ]
})
export class AppModule { }
