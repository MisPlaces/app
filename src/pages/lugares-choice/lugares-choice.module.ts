import { LugaresChoicePage } from './lugares-choice';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        LugaresChoicePage,

    ],
    imports: [
        IonicPageModule.forChild(LugaresChoicePage)
    ],
    exports: [
        LugaresChoicePage
    ]
})
export class LugaresChoiceModule {
}
