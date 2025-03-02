import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Chart, registerables } from 'chart.js';
import { Router } from '@angular/router';
Chart.register(...registerables);

@Component({
  selector: 'app-estadisticas-edumind',
  templateUrl: './estadisticas-edumind.page.html',
  styleUrls: ['./estadisticas-edumind.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class EstadisticasEdumindPage implements OnInit {

  stressChart: any;
  oxygenChart: any;

 constructor(private router: Router) {}

  ngOnInit() {
    this.loadStressChart();
    this.loadOxygenChart();
  }

  loadStressChart() {
    this.stressChart = new Chart('stressChart', {
      type: 'line',
      data: {
        labels: ['1', '2', '3', '4', '5'], // Cambiar a los datos reales
        datasets: [
          {
            label: 'Estrés',
            data: [65, 59, 80, 81, 56],
            borderColor: '#ffc400',
            fill: true,
            backgroundColor: 'rgba(255, 196, 0, 0.2)',
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
        },
      },
    });
  }

  loadOxygenChart() {
    this.oxygenChart = new Chart('oxygenChart', {
      type: 'line',
      data: {
        labels: ['1', '2', '3', '4', '5'], // Cambiar a los datos reales
        datasets: [
          {
            label: 'Oxigenación',
            data: [75, 69, 85, 91, 76],
            borderColor: '#28A745',
            fill: true,
            backgroundColor: 'rgba(40, 167, 69, 0.2)',
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
        },
      },
    });
  }

  generateReport() {
    console.log('Generar reporte');
    // Implementar la lógica de generación de reporte
  }
  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }

}
