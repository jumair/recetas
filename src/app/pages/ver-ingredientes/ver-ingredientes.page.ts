import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton,
         IonList, IonItemSliding, IonItem, IonAvatar, IonLabel, IonItemOptions, IonItemOption, IonIcon,
         IonCheckbox, IonInput } from '@ionic/angular/standalone';
import { Ingrediente } from 'src/app/interfaces/ireceta';
import { IngredientesService } from 'src/app/services/ingredientes.service';

import { addIcons } from 'ionicons';
import { pin, share, trash } from 'ionicons/icons';


@Component({
  selector: 'app-ver-ingredientes',
  templateUrl: './ver-ingredientes.page.html',
  styleUrls: ['./ver-ingredientes.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, 
            IonList, IonItemSliding, IonItem, IonAvatar, IonLabel, IonItemOptions, IonItemOption, IonIcon, IonCheckbox, IonInput]
})
export class VerIngredientesPage implements OnInit {

  public verIngredientes : Ingrediente[] = [];
  ingredientesManager = inject(IngredientesService);

  constructor() {
    addIcons({ pin, share, trash });
  }

  ngOnInit() {
    this.verIngredientes = this.ingredientesManager.getIngredientes();
    //console.log("Ver Ingredientes -> ", this.verIngredientes);
  }


  public ingredientesSeleccionados: boolean[] = [];

  cambiaColorCheckBox(index: number) {
    this.ingredientesSeleccionados[index] = !this.ingredientesSeleccionados[index];

  }

}
