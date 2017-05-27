import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LugaresMapaPage } from './lugares-mapa';

@NgModule({
  declarations: [
    LugaresMapaPage,
  ],
  imports: [
    IonicPageModule.forChild(LugaresMapaPage),
  ],
  exports: [
    LugaresMapaPage
  ]
})
export class LugaresMapaPageModule {}
