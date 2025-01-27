import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports:[IonicModule]
})
export class PerfilPage implements OnInit {
  ngOnInit(): void {}


  constructor(private router: Router) {}
  goBack() {
    this.router.navigate(['/home']);  // Regresa a la página de inicio o a la última página
  }

  logout() {
    // Lógica de cierre de sesión
    console.log('Cerrando sesión');
    this.router.navigateByUrl('/home', { replaceUrl: true }); // Redirigir a la página principal
  }
  }


