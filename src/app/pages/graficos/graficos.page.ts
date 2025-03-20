import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonToast } from '@ionic/angular/standalone';

import Chart, { ChartConfiguration } from 'chart.js/auto';
import { Ingrediente, IReceta } from 'src/app/interfaces/ireceta';
import { RecetasManagerService } from 'src/app/services/recetas-manager.service';
import { IngredientesService } from 'src/app/services/ingredientes.service';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.page.html',
  styleUrls: ['./graficos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, IonToast]
})
export class GraficosPage implements OnInit {

  //public recetas : IReceta[] | undefined;
  recetasManager = inject(RecetasManagerService);

  private etis: string[] = ['Primeros', 'Segundos', 'Postres'];
  private numeros: number[] = [0, 0, 0];
  private colores: string[] = ['rgb(69,177,223)', 'rgb(99,201,122)', 'rgb(203,82,82)'];

  private ingredientes : Ingrediente[] = [];
  ingredientesManager = inject(IngredientesService);

  private colorTodos: string[] = ['rgb(69,177,223)', 'rgb(99,201,122)', 'rgb(193, 30, 141)', 'rgb(161, 203, 82)', 'rgb(128, 82, 203)'
    , 'rgb(223, 28, 28)', 'rgb(48, 9, 165)', 'rgb(24, 84, 25)', 'rgb(91, 86, 86)', 'rgb(159, 164, 19)', 'rgb(25, 112, 111)'];
  private colorTodosTrans: string[] = ['rgba(69,177,223,0.2)', 'rgba(99,201,122,0.2)', 'rgba(193, 30, 141,0.2)', 'rgba(161, 203, 82,0.2)', 'rgba(128, 82, 203,0.2)'
    , 'rgba(223, 28, 28,0.2)', 'rgba(48, 9, 165,0.2)', 'rgba(24, 84, 25,0.2)', 'rgba(91, 86, 86,0.2)', 'rgba(159, 164, 19,0.2)', 'rgba(25, 112, 111,0.2)'];
  private colorTodosTransBorde: string[] = ['rgba(69,177,223,1)', 'rgba(99,201,122,1)', 'rgba(193, 30, 141,1)', 'rgba(161, 203, 82,1)', 'rgba(128, 82, 203,1)'
    , 'rgba(223, 28, 28,1)', 'rgba(48, 9, 165,1)', 'rgba(24, 84, 25,1)', 'rgba(91, 86, 86,1)', 'rgba(159, 164, 19,1)', 'rgba(25, 112, 111,1)'];
  private etiIngre: string[] = [];
  private numIngre: number[] = [];
  private colIngre: string[] = [];
  private colIngreTrans: string[] = [];

  public isToastOpen = false;


  constructor() { }

  ngOnInit() {
  
    //crear array con labels-etis, numbers-numeros y colors-colores
    this.etis.forEach((etiqueta, index) => {
      this.numeros[index] = this.recetasManager.getRecetas().filter(elem => elem.tipo.includes(etiqueta)).length;
    });

    //Buscamos los ingredientes
    this.ingredientes = this.ingredientesManager.getIngredientes();

    if (this.ingredientes.length == 0) { 
      //console.log("No Hay Ingredientes");
      //alert("No Hay Ingredientes");
      this.setOpen(true);
    } else {
      this.ingredientes.forEach(elemen => {
        this.etiIngre.push(elemen.nombre);
        elemen.unidad == 'gr'? this.numIngre.push(elemen.cantidad) : this.numIngre.push(elemen.cantidad * 100);
      });
      
      this.colIngre = this.colorTodos.slice(0, this.ingredientes.length);
      this.colIngreTrans = this.colorTodosTrans.slice(0, this.ingredientes.length);
    }


    this.dibujar();
    //this.dibujaPie();
    //this.dibujaCirculo();

    this.dibuChart('doughnut', this.etis, this.numeros, this.colores, "Número de Recetas", "graphChart");

    //this.dibujarChart('bar');
    //this.dibujarChart('doughnut');
    //this.dibujarChart('line');
    //this.dibujarChart('pie');

    this.dibuChart('bar', this.etiIngre, this.numIngre, this.colIngreTrans, "Cantidad de Ingredientes en gramos", "graphChartIngre");
    this.dibuChart('doughnut', this.etiIngre, this.numIngre, this.colIngre, "Cantidad de Ingredientes en gramos", "graphChartIngre1");
    this.dibuChart('line', this.etiIngre, this.numIngre, this.colIngre, "Cantidad de Ingredientes en gramos", "graphChartIngre2");

    this.dibuChartBorde('bar', this.etiIngre, this.numIngre, this.colIngreTrans, this.colorTodosTransBorde, "Cantidad de Ingredientes en gramos", "graphChartIngre3");
  }


  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }


  dibuChart(figura: 'bar' | 'doughnut' | 'line' | 'pie', etis: string[], numeros: number[], colores: string[],
     label: string, idCanva: string) {

    const labels = etis;
    const numbers = numeros;
    const colors = colores;

    const data = {
      labels: labels,
      datasets: [{
          label: label,
          data: numbers,
          backgroundColor: colors
      }]
    };

    const config: ChartConfiguration<typeof figura, number[], string> = {
      type: figura,
      data: data,
    };

    const myChartPie = new Chart(idCanva, config);
  }

  dibuChartBorde(figura: 'bar' | 'doughnut' | 'line' | 'pie', etis: string[], numeros: number[], colores: string[], bordes: string[], 
    label: string, idCanva: string) {

   const labels = etis;
   const numbers = numeros;
   const colors = colores;

   const data = {
     labels: labels,
     datasets: [{
         label: label,
         data: numbers,
         backgroundColor: colors,
         borderColor: bordes,
         borderWidth: 1
     }]
   };

   const config: ChartConfiguration<typeof figura, number[], string> = {
     type: figura,
     data: data,
   };

   const myChartPie = new Chart(idCanva, config);
 }



  dibujarChart(figura: 'bar' | 'doughnut' | 'line' | 'pie') {
    const labels = ['Primeros', 'Segundos', 'Postres'];
    const numbers = [3, 1, 1];
    const colors = ['rgb(69,177,223)', 'rgb(99,201,122)', 'rgb(203,82,82)'];

    const data = {
      labels: labels,
      datasets: [{
          label: 'Número de Recetas',
          //borderColor: 'rgb(54, 162, 235)',
          //borderWidth: 2,
          data: numbers,
          backgroundColor: colors
      }]
    };

    const config: ChartConfiguration<typeof figura, number[], string> = {
      type: figura,
      data: data,
    };

    const myChartPie = new Chart("graphChart", config);
  }


  dibujar() {
    //const graph = document.getElementById('graph');
    
    const myChart = new Chart("graph", {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
    });
    
  }

  dibujaPie() {
    //const graph = document.getElementById('graph1');

    const myChart1 = new Chart("graph1", {
      type: 'pie',
      data: {
        labels: ['referencia 1', 'referencia 2', 'referencia 3'],
        datasets: [{data: [10, 20, 30]}]
      }
    });
  }

  dibujaCirculo() {
    //const graph = document.getElementById('graph2');

    const labels = ['Enero', 'Febrero', 'Marzo', 'Abril'];
    const colors = ['rgb(69,177,223)', 'rgb(99,201,122)', 'rgb(203,82,82)', 'rgb(229,224,88)'];

    //Para hacerlo directamente
    /*
    const myChart = new Chart("graph2", {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          data: [1, 2, 3, 4],
          backgroundColor: colors
        }]
      }
    });*/

    const data = {
      labels: labels,
      datasets: [{
          data: [1, 2, 3, 4],
          backgroundColor: colors
      }]
    };

    //Para hacerlo con variable data
    /*
    new Chart("graph2", {
      type: 'pie',
      data: data
    });
    */

    //Para hacerlo de la manera más corta posible ??
    const config: ChartConfiguration<'pie', number[], string> = {
      type: 'pie',  // Especifica el tipo de gráfico de manera correcta
      data: data,
    };

    new Chart("graph2", config);
    
  }


}
