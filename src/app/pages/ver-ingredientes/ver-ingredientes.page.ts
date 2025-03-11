import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { Ingrediente } from 'src/app/interfaces/ireceta';
import { IngredientesService } from 'src/app/services/ingredientes.service';

@Component({
  selector: 'app-ver-ingredientes',
  templateUrl: './ver-ingredientes.page.html',
  styleUrls: ['./ver-ingredientes.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton]
})
export class VerIngredientesPage implements OnInit {

  public verIngredientes : Ingrediente[] = [];
  ingredientesManager = inject(IngredientesService);

  constructor() { }

  ngOnInit() {
    this.verIngredientes = this.ingredientesManager.getIngredientes();
    //console.log("Ver Ingredientes -> ", this.verIngredientes);
  }

}
