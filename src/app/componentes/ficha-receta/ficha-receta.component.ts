import { Component, Input, OnInit } from '@angular/core';
import { IReceta } from 'src/app/interfaces/ireceta';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonLabel } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ficha-receta',
  templateUrl: './ficha-receta.component.html',
  styleUrls: ['./ficha-receta.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, CommonModule, IonImg, IonLabel]
})
export class FichaRecetaComponent  implements OnInit {

  @Input() receta : IReceta | undefined;

  constructor() { }

  ngOnInit() {}

}
