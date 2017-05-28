import { SeleccionarModoPage } from './../pages/seleccionar-modo/seleccionar-modo';

import { AuthProvider } from './../providers/auth/auth';
import { Login } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Platform, Events, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = SeleccionarModoPage;
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public menuCtrl: MenuController,
    public authService: AuthProvider,
    public events: Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.listenToEvents();
      // this.menuCtrl.enable(false, 'menu');
      // this.menuCtrl.swipeEnable(false, 'menu');
    });
  }

  listenToEvents() {
    this.events.subscribe('user:logout', () => {
      console.log('logout event');
      // this.logout();
      this.authService.logout();
      this.nav.setRoot(Login);
      this.menuCtrl.enable(false, 'menu');
      this.menuCtrl.swipeEnable(false, 'menu');
    });

    this.events.subscribe('user:login', () => {
      console.log('login event');
      this.menuCtrl.enable(true, 'menu');
      this.menuCtrl.swipeEnable(true, 'menu');
    });
  }

  seleccionarModo() {
    this.nav.setRoot(SeleccionarModoPage);
  }


  logout() {

    this.events.publish('user:logout');

  }

  lugar() {
    // this.nav.push(LugarPage);
  }
}

