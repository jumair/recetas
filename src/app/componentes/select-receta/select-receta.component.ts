import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IReceta } from 'src/app/interfaces/ireceta';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonLabel, IonCheckbox, 
  IonThumbnail } from '@ionic/angular/standalone';

@Component({
  selector: 'app-select-receta',
  templateUrl: './select-receta.component.html',
  styleUrls: ['./select-receta.component.scss'],
  imports: [CommonModule, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonCheckbox,
   IonThumbnail]
})
export class SelectRecetaComponent  implements OnInit {

  @Input() receta : IReceta | undefined;

  constructor() { }

  ngOnInit() {}

}
