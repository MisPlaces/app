import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeleccionarModoPage } from './seleccionar-modo';

@NgModule({
  declarations: [
    SeleccionarModoPage,
  ],
  imports: [
    IonicPageModule.forChild(SeleccionarModoPage),
  ],
  exports: [
    SeleccionarModoPage
  ]
})
export class SeleccionarModoPageModule {}
