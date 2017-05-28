import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusquedaAvanzadaLugaresFiltrosPage } from './busqueda-avanzada-lugares-filtros';

@NgModule({
  declarations: [
    BusquedaAvanzadaLugaresFiltrosPage,
  ],
  imports: [
    IonicPageModule.forChild(BusquedaAvanzadaLugaresFiltrosPage),
  ],
  exports: [
    BusquedaAvanzadaLugaresFiltrosPage
  ]
})
export class BusquedaAvanzadaLugaresFiltrosPageModule {}
