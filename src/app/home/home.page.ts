import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, ],
  standalone: true,
})
export class HomePage implements OnInit{
  ngOnInit(): void {}
  constructor(private router: Router) {}
  
   
  navigateToProfile() {
    this.router.navigateByUrl('/perfil', { replaceUrl: true });
  }
  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }
}
