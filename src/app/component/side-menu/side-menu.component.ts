import { Component, OnInit } from '@angular/core';
import { IonicModule, MenuController } from '@ionic/angular';
import { IonApp } from "@ionic/angular/standalone";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  standalone: true,
  imports: [IonicModule],  // Importa IonicModule aquí

})
export class SideMenuComponent  implements OnInit {

  constructor(private menuController: MenuController) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openMenu() {
    this.menuController.open(); // Método para abrir el menú programáticamente
  }


}
