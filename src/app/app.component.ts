
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel,
  IonRouterOutlet, IonRouterLink, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonInput } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
//import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';

import { homeOutline, homeSharp, eyeOutline, eyeSharp, checkboxOutline, checkboxSharp, cartOutline, cartSharp,
  barChartOutline, barChartSharp, bodyOutline, bodySharp, restaurantOutline, restaurantSharp } from 'ionicons/icons';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel,
    IonRouterLink, IonRouterOutlet, CommonModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonButton, IonInput, FormsModule],
})
export class AppComponent {

  username: string = '';
  password: string = '';
  public myFlag: boolean = false;

  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Ver Recetas', url: '/ver-recetas/todas', icon: 'eye' },
    { title: 'Seleccionar Recetas', url: '/sel-recetas', icon: 'checkbox' },
    { title: 'Lista Ingredientes', url: '/ver-ingredientes', icon: 'cart' },
    { title: 'Graficos', url: '/graficos', icon: 'bar-chart' },
    { title: 'Login', url: '/error', icon: 'body' },
  ];
  
  public labels = [
    { title: 'Primeros', url: '/ver-recetas/Primeros' },
    { title: 'Segundos', url: '/ver-recetas/Segundos' },
    { title: 'Postres', url: '/ver-recetas/Postres' }
  ];

  constructor() {
    //addIcons({ mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
    addIcons({ homeOutline, homeSharp, eyeOutline, eyeSharp, checkboxOutline, checkboxSharp, cartOutline, cartSharp,
      barChartOutline, barChartSharp, bodyOutline, bodySharp, restaurantOutline, restaurantSharp });
  }

  login() {
    // Aquí puedes agregar la lógica para verificar el usuario y la contraseña
    if (this.username === 'usuario' && this.password === 'contraseña') {
      this.myFlag = true;  // Cambia el valor de myFlag para mostrar el menú
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
