import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItinerarioConfirmadoPage } from './itinerario-confirmado';

@NgModule({
  declarations: [
    ItinerarioConfirmadoPage,
  ],
  imports: [
    IonicPageModule.forChild(ItinerarioConfirmadoPage),
  ],
  exports: [
    ItinerarioConfirmadoPage
  ]
})
export class ItinerarioConfirmadoPageModule {}
