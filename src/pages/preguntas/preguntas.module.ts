import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreguntasPage } from './preguntas';

@NgModule({
  declarations: [
    PreguntasPage,
  ],
  imports: [
    IonicPageModule.forChild(PreguntasPage),
  ],
  exports: [
    PreguntasPage
  ]
})
export class PreguntasPageModule {}
