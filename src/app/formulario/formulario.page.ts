import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
  imports:[IonicModule],
  standalone:true,
})
export class FormularioPage implements OnInit {

   // Respuestas del formulario
   respuestas: { [key: string]: string } = {
    pregunta1: '',
    pregunta2: '',
    pregunta3: '',
  };

  constructor(private alertController: AlertController,private router:Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // Método para manejar el envío del formulario
  submitForm() {
    // Validación: asegurarse de que todas las preguntas estén respondidas
    if (!this.respuestas['pregunta1'] || !this.respuestas['pregunta2'] || !this.respuestas['pregunta3']) {
      this.showAlert('Formulario incompleto', 'Por favor, responde todas las preguntas antes de enviar.');
      return;
    }

    // Enviar respuestas (aquí se podrían enviar a una API o guardar localmente)
    console.log('Respuestas enviadas:', this.respuestas);

    // Mostrar mensaje de confirmación
    this.showAlert('¡Enviado!', 'Tus respuestas han sido enviadas correctamente.');
  }

  // Método para mostrar alertas
  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }
}
