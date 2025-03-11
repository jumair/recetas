import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton,
         IonFooter, IonModal, IonItem, IonButton } from '@ionic/angular/standalone';

 /******** import para el modal con ion-modal *****************/
 import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton,
            IonFooter, IonModal, IonItem, IonButton]
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /******** Funciones para el modal con ion-modal *****************/
  @ViewChild(IonModal) modal!: IonModal;

  message = 'Esto es un ejemplo de modal';
  name!: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === 'confirm') {
      this.message = `Hola, ${event.detail.data}!`;

      //console.log("Nombre -> ", this.name)
    }
  }

}
