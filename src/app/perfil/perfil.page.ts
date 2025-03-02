import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports:[IonicModule, NgIf]
})
export class PerfilPage implements OnInit {
  ngOnInit(): void {}

  imageSrc: string | ArrayBuffer | null = null; // Variable para almacenar la imagen

  onImageSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result; // Asignamos la URL de la imagen
      };
      reader.readAsDataURL(file); // Leemos el archivo como una URL de datos
    }
  }


  constructor(private router: Router) {}
  goBack() {
    this.router.navigate(['/home']);  // Regresa a la página de inicio o a la última página
  }

  logout() {
    // Lógica de cierre de sesión
    console.log('Cerrando sesión');
    this.router.navigateByUrl('/home', { replaceUrl: true }); // Redirigir a la página principal
  }

  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }

  }


