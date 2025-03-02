import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, IonicSlides } from '@ionic/angular';
import { IonHeader } from "@ionic/angular/standalone";

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
  imports: [IonicModule],
  standalone: true
})
export class BienvenidaPage implements OnInit {

    ngOnInit(): void {}
    constructor(private router: Router) {}

  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }


}
