import { ImgDirective } from './../../directives/img/img';
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {LugaresPage} from './lugares';
import {FilterPipe} from "../../pipes/filter/filter";

@NgModule({
    declarations: [
        LugaresPage,
        FilterPipe,
        ImgDirective
    ],
    imports: [
        IonicPageModule.forChild(LugaresPage)
    ],
    exports: [
        LugaresPage
    ]
})
export class LugaresPageModule {
}
