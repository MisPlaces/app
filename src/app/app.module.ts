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
    ApiProvider
  ]
})
export class AppModule { }
