import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-list-games-edumind',
  templateUrl: './list-games-edumind.page.html',
  styleUrls: ['./list-games-edumind.page.scss'],
  imports: [IonicModule],
  standalone: true
})
export class ListGamesEdumindPage implements OnInit {

  constructor(private router: Router) {}
 
   ngOnInit() {
   }
 
   navigateTo(page: string) {
     this.router.navigate([`/${page}`]);
   }
 
}
