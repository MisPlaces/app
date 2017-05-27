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
    IonicModule.forRoot(MyApp),
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
    GeocodingService
  ]
})
export class AppModule { }
