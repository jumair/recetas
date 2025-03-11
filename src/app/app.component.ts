
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Ver Recetas', url: '/ver-recetas/todas', icon: 'mail' },
    { title: 'Seleccionar Recetas', url: '/sel-recetas', icon: 'paper-plane' },
    { title: 'Ver Ingredientes', url: '/ver-ingredientes', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Graficos', url: '/graficos', icon: 'trash' },
    { title: 'Login', url: '/login', icon: 'warning' },
  ];
  
  public labels = [
    { title: 'Primeros', url: '/ver-recetas/Primeros' },
    { title: 'Segundos', url: '/ver-recetas/Segundos' },
    { title: 'Postres', url: '/ver-recetas/Postres' }
  ];

  //public labels = ["Primeros", "Segundos", "Postres"];

  constructor() {
    addIcons({ mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }
}
