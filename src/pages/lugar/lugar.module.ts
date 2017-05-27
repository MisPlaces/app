import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LugarPage } from './lugar';

@NgModule({
  declarations: [
    LugarPage,
  ],
  imports: [
    IonicPageModule.forChild(LugarPage),
  ],
  exports: [
    LugarPage
  ]
})
export class LugarPageModule {}
