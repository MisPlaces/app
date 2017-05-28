import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuscarLugaresPage } from './buscar-lugares';

@NgModule({
  declarations: [
    BuscarLugaresPage
  ],
  imports: [
    IonicPageModule.forChild(BuscarLugaresPage),
  ],
  exports: [
    BuscarLugaresPage
  ]
})
export class BuscarLugaresPageModule {}
