import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:false,
  // // Esta línea es solo necesaria si usas componentes standalone, la eliminamos por ahora
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  showError = false;                                                      

  constructor(
    private formBuilder: FormBuilder,
    private router: Router  // Unificar los constructores
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

navigateTo(page: string) {
  this.router.navigate([`/${page}`]);
}

  onLogin() {
    const { email, password } = this.loginForm.value;

    // Validar login (esto es un ejemplo, conecta con tu API real)
    if (email === 'test@example.com' && password === 'password123') {
      this.showError = false;
      // Redirigir o hacer algo después de login exitoso
      this.router.navigate(['/tabs/home-edumind']); // Ejemplo de navegación a otra página
    } else {
      this.showError = true;
    }
  }
}
