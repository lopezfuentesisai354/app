import { NgFor } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-home-edumind',
  templateUrl: './home-edumind.page.html',
  styleUrls: ['./home-edumind.page.scss'],
  schemas: [NO_ERRORS_SCHEMA],
  standalone: true,
  imports: [IonicModule],
})
export class HomeEdumindPage {
  constructor() { }

  slidesOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: true,
    pagination: { clickable: true },
  };

  
}
