import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
Chart.register(...registerables);
@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.page.html',
  styleUrls: ['./estadistica.page.scss'],
   imports: [IonicModule],
  standalone:true,
})
export class EstadisticaPage implements OnInit {
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
            borderColor: '#007BFF',
            fill: true,
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
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
