import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-vinculacion',
  templateUrl: './vinculacion.page.html',
  styleUrls: ['./vinculacion.page.scss'],
  imports:[IonicModule]

})
export class VinculacionPage implements OnInit {

 constructor(private router: Router) {}

  ngOnInit() {
  }
  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }

}
