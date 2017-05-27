import { LugaresPage } from './../lugares/lugares';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the PreguntasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-preguntas',
  templateUrl: 'preguntas.html',
})
export class PreguntasPage {
  @ViewChild('sliders') slider: Slides;

  continueText: string = 'Skip';
  mySlideOptions: any;
  showSlide: boolean = true;
  comida;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    this.slider.initialSlide = 0;
    this.slider.paginationClickable = true;
  }

  changeSlide() {
    if (this.comida) {
      this.slider.slideNext(300);
    }
    // console.log(this.slider);
    // if (this.slider) {
    //   this.slider.slideNext(300);
    // }

  }

  onSlideChangeStart(slider: any) {
    console.log('Slide change start', slider);
    slider.isEnd ? this.continueText = 'Continue' : this.continueText = 'Skip';
  }

  onSlideMove(slider: any) {
    console.log('Slide move', slider);
  }

  toggleLastSlide() {
    this.showSlide = !this.showSlide;
  }

  skip() {
    this.navCtrl.push(LugaresPage);

  }
}
