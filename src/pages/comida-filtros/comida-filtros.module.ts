import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComidaFiltrosPage } from './comida-filtros';

@NgModule({
  declarations: [
    ComidaFiltrosPage,
  ],
  imports: [
    IonicPageModule.forChild(ComidaFiltrosPage),
  ],
  exports: [
    ComidaFiltrosPage
  ]
})
export class ComidaFiltrosPageModule {}
