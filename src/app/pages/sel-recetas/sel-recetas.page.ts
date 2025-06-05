import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonButton, ToastController, IonInput } from '@ionic/angular/standalone';
import { IReceta } from 'src/app/interfaces/ireceta';
import { Ingrediente } from 'src/app/interfaces/ireceta';
import { RecetasManagerService } from 'src/app/services/recetas-manager.service';
import { SelectRecetaComponent } from 'src/app/componentes/select-receta/select-receta.component';
import { IngredientesService } from 'src/app/services/ingredientes.service';

@Component({
  selector: 'app-sel-recetas',
  templateUrl: './sel-recetas.page.html',
  styleUrls: ['./sel-recetas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, IonButton,
             SelectRecetaComponent, IonInput]
})
export class SelRecetasPage implements OnInit {
  //public selRecetas : IReceta[] | undefined;
  public selRecetas : IReceta[] = [];
  recetasManager = inject(RecetasManagerService);

  //public nombreRecetas : String[] = [];
  public genRecetas : IReceta[] = [];

  public ingredientes : Ingrediente[] = [];
  ingredientesManager = inject(IngredientesService);

  numpersonas: string = '';

  constructor(private toastController: ToastController) { }

  ngOnInit() {
    this.selRecetas = this.recetasManager.getRecetas();
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Lista de la compra creada',
      duration: 2000,
      position: position,
    });

    await toast.present();
  }

  generarSeleccion() {
    const seleccionados = document.getElementsByClassName('compra');

    // Generar Array de genRecetas con las recetas elegidas.
    this.genRecetas = [];

    Array.from(seleccionados).forEach( element => {
      if (element.ariaChecked === "true") {
        const receta = this.selRecetas.filter(elem => elem.titulo === element.id)[0];
        //genera clon de la receta elegida para que apunte a la nueva receta.
        const clon = JSON.parse(JSON.stringify(receta));
        this.genRecetas.push(clon);
      };
    });
    
    // Generar Array de ingredientes.
    this.ingredientes = [];
    const numPersonas = parseInt(this.numpersonas);

    this.genRecetas.forEach(receta => {
      receta.ingredientes.forEach(ingrediente => {
        //comprueba si hay algún ingrediente repetido
        if (this.ingredientes.some(obj => obj.nombre === ingrediente.nombre)) 
          {
            const indice = this.ingredientes.findIndex(obj => obj.nombre === ingrediente.nombre);
            this.ingredientes[indice].cantidad+=ingrediente.cantidad * numPersonas;
          } else {
            ingrediente.cantidad = ingrediente.cantidad * numPersonas;
            this.ingredientes.push(ingrediente);
          }
      });
    });

    //console.log("Ingredientes -> ", this.ingredientes);
    this.ingredientesManager.setIngredientes(this.ingredientes);

    //Crea toast con mensaje "Lista de la compra creada"
    this.presentToast('bottom');

  }


  /* COPIA verSeleccion */
  verSeleccionCopiaConComentario() {
    const seleccionados = document.getElementsByClassName('compra');
    //console.log("Seleccionados --> ", seleccionados);

    /*
    for (let i = 0;  i < seleccionados.length; i++) {
      console.log(seleccionados[i].id + " - " + seleccionados[i].ariaChecked);
    };*/

    this.genRecetas = [];
    Array.from(seleccionados).forEach( element => {
      if (element.ariaChecked === "true") {
        //this.nombreRecetas.push(element.id);

        //CUIDADO, copia la direccion del objeto. Copiar el objeto. ESTO hace clonacion superficial y debe ser profunda. freecodecamp
        //this.genRecetas.push(this.selRecetas.filter(elem => elem.titulo == element.id)[0]);
        const receta = this.selRecetas.filter(elem => elem.titulo === element.id)[0];
        const clon = JSON.parse(JSON.stringify(receta));
        this.genRecetas.push(clon);
      };
    });
    //console.log("Generadas -> ", this.genRecetas);
    //console.log("Recetas -> ", this.selRecetas);

    //console.log("Ingredientes -> ", this.selRecetas[0].ingredientes);
    //console.log("Ingredientes -> ", this.selRecetas.filter(elem => elem.titulo == "lentejas")[0]);

    //let copiaArray = vegetales.slice(); Copia de array

    //OJO con las redirecciones de los arrays de ingredientes, copia el objeto ingrediente o el array ingredientes
    // Generar Array de ingredientes
    this.ingredientes = [];

    this.genRecetas.forEach(receta => {
      receta.ingredientes.forEach(ingrediente => {
        //if (this.ingredientes.some(obj => JSON.stringify(obj) === JSON.stringify(ingrediente)))
        if (this.ingredientes.some(obj => obj.nombre === ingrediente.nombre)) 
          {
            // CUIDADO porque al alterar el array el objeto cambia y ya no es igual
            // NO comparar el objeto completo, sólo el nombre

            //const indice = this.ingredientes.findIndex(obj => JSON.stringify(obj) === JSON.stringify(ingrediente));
            //console.log(indice);
            //this.ingredientes[indice].cantidad+=ingrediente.cantidad;

            const indice = this.ingredientes.findIndex(obj => obj.nombre === ingrediente.nombre);
            //AQUI ESTA EL ERROR A CORREGIR ******************************************************************
            // ********************* hacer console de los arrays de selRecetas e ingredientes
            this.ingredientes[indice].cantidad+=ingrediente.cantidad;
            //this.ingredientes[2].cantidad=1000;
            //console.log("Original -> ", this.selRecetas);

          } else {
            this.ingredientes.push(ingrediente);
          }
      });
    });
    //console.log("Ingredientes -> ", this.ingredientes);
    this.ingredientesManager.setIngredientes(this.ingredientes);
  }
  /* FIN COPIA verSeleccion */


}
