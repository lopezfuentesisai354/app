import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-musica-edumind',
  templateUrl: './musica-edumind.page.html',
  styleUrls: ['./musica-edumind.page.scss'],
  imports: [IonicModule],
  standalone: true
})
export class MusicaEdumindPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
  }

  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }


}
