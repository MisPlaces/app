import { SalidaNocturnaPage } from './salida-nocturna';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        SalidaNocturnaPage,

    ],
    imports: [
        IonicPageModule.forChild(SalidaNocturnaPage)
    ],
    exports: [
        SalidaNocturnaPage
    ]
})
export class SalidaNocturnaPageModule {
}
