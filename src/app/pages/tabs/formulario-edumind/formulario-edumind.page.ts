import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-formulario-edumind',
  templateUrl: './formulario-edumind.page.html',
  styleUrls: ['./formulario-edumind.page.scss'],
  schemas: [NO_ERRORS_SCHEMA],
  standalone: true,
  imports: [IonicModule],
})
export class FormularioEdumindPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
