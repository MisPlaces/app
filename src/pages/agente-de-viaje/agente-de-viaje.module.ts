import { AgenteDeViajePage } from './agente-de-viaje';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        AgenteDeViajePage
    ],
    imports: [
        IonicPageModule.forChild(AgenteDeViajePage)
    ],
    exports: [
        AgenteDeViajePage
    ]
})
export class AgenteDeViajePageModule {
}
