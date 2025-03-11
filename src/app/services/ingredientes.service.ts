import { Injectable } from '@angular/core';
import { Ingrediente } from '../interfaces/ireceta';

@Injectable({
  providedIn: 'root'
})
export class IngredientesService {

  private ingredientes: Ingrediente[] = [];//Forma parte de la solución 'fácil'

  constructor() { }

  getIngredientes() {
    return this.ingredientes;
  }

  setIngredientes(selIngredientes : Ingrediente[]) {
    this.ingredientes = selIngredientes;
    //console.log("setIngredientes -> ", this.ingredientes);
  }

}
