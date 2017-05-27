import { RestaurantesPage } from './restaurantes';
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';

@NgModule({
    declarations: [
        RestaurantesPage,
        
    ],
    imports: [
        IonicPageModule.forChild(RestaurantesPage)
    ],
    exports: [
        RestaurantesPage
    ]
})
export class RestaurantesPageModule {
}
