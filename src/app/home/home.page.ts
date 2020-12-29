import { Component,ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('slider', { static: true}) sliders: IonSlides;

    slideOpts = {
        speed: 1000,
        autoplay:true,
    };

  constructor() {}

  prev(){
      this.sliders.slidePrev();
      this.sliders.startAutoplay();
  }

  next(){
      this.sliders.slideNext();
      this.sliders.startAutoplay();
  }

}