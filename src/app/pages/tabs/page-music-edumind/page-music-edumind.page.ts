import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-page-music-edumind',
  templateUrl: './page-music-edumind.page.html',
  styleUrls: ['./page-music-edumind.page.scss'],
  imports: [IonicModule],
  standalone: true
})
export class PageMusicEdumindPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }

}
