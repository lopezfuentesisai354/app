import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  imports:[IonicModule],
  standalone:true,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {
  constructor(private router: Router) {}
  

  ngOnInit() {}
  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }

}
