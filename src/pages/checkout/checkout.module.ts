import { CheckoutPage } from './checkout';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        CheckoutPage
    ],
    imports: [
        IonicPageModule.forChild(CheckoutPage)
    ],
    exports: [
        CheckoutPage
    ]
})
export class CheckoutPageModule {
}
