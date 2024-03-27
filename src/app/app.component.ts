import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

//CHARTJS
import { ViewChild, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  
  @ViewChild('canvasi') canvas: any;
  chart: any;

  @ViewChild('donita') canvasd: any;
  chartd: any;

  @ViewChild('barrita') canvasb: any;
  chartb: any;

  @ViewChild('barbujita') canvasbu: any;
  chartbu: any;

  ngAfterViewInit(): void {
    //Grafico de LINEAS
    this.chart = new Chart(this.canvas.nativeElement, {
      type: 'line',
      data: {
        labels: [
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
        ],
        datasets: [
          {
            label: 'Personas',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(54, 162, 235)',
            tension: 0.1,
          },
        ],
      },
    });

    //Grafico de DONA
    this.chartd = new Chart(this.canvasd.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Militar', 'Civil', 'Docente', 'Otro'],
        datasets: [
          {
            label: 'Cantidad',
            data: [65, 59, 80, 81],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(255, 0, 0)',
            ],
            hoverOffset: 4,
          },
        ],
      },
    });

    //Grafico de BARRA
    this.chartb = new Chart(this.canvasb.nativeElement, {
      type: 'bar',
      data: {
        labels: [
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
        ],
        datasets: [
          {
            label: 'Consumos en Kilos',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
            ],
            borderWidth: 1,
          },
        ],
      },
    });

    //Grafico de BURBUJA
    this.chartbu = new Chart(this.canvasbu.nativeElement, {
      type: 'bubble',
      data: {
        datasets: [
          {
            label: 'First Dataset',
            data: [
              {
                x: 20,
                y: 30,
                r: 15,
              },
              {
                x: 22,
                y: 25,
                r: 35,
              },
              {
                x: 25,
                y: 20,
                r: 7,
              },
              {
                x: 30,
                y: 10,
                r: 10,
              },
            ],
            backgroundColor: 'rgb(255, 99, 132)',
          },
        ],
      },
    });

  }
}
