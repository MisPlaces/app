import { ActividadesPage } from './actividades';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        ActividadesPage
    ],
    imports: [
        IonicPageModule.forChild(ActividadesPage)
    ],
    exports: [
        ActividadesPage
    ]
})
export class ActividadesPageModule {
}
