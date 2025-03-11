import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IReceta } from '../interfaces/ireceta';

@Injectable({
  providedIn: 'root'
})
export class RecetasManagerService {
  //static URL = 'https://juanpink.github.io/recetas.json';
  static URL = 'https://jumair.github.io/curriculum/recetas.json';

  private httpClient = inject(HttpClient);

  private recetas: IReceta[] = [];//Forma parte de la solución 'fácil'

  constructor() {
    this.httpClient.get(RecetasManagerService.URL).subscribe(
    //this.httpClient.get('src/assests/recetas.json').subscribe(
      ((data: IReceta[] | any) => {
        data.recetas.forEach((receta: IReceta) => {
          this.recetas.push(receta);
        });
      }));
  }

  getRecetas() {
    return this.recetas;
  }
}
