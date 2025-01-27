import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-niveles',
  templateUrl: './niveles.page.html',
  styleUrls: ['./niveles.page.scss'],
  imports:[IonicModule]
})
export class NivelesPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }

}
