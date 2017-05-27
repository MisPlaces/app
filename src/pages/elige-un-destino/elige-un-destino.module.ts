import { EligeUnDestinoPage } from './elige-un-destino';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        EligeUnDestinoPage,

    ],
    imports: [
        IonicPageModule.forChild(EligeUnDestinoPage)
    ],
    exports: [
        EligeUnDestinoPage
    ]
})
export class EligeUnDestinoPageModule {
}
