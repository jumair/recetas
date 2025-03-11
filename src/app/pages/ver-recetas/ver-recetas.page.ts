import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBadge, IonMenuButton, IonButtons } from '@ionic/angular/standalone';
import { IReceta } from 'src/app/interfaces/ireceta';
import { RecetasManagerService } from 'src/app/services/recetas-manager.service';
import { FichaRecetaComponent } from 'src/app/componentes/ficha-receta/ficha-receta.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-recetas',
  templateUrl: './ver-recetas.page.html',
  styleUrls: ['./ver-recetas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, FichaRecetaComponent, IonBadge, IonMenuButton, IonButtons]
})
export class VerRecetasPage implements OnInit {
  public genero!: string;
  private activatedRoute = inject(ActivatedRoute);

  public recetas : IReceta[] | undefined;
  recetasManager = inject(RecetasManagerService);

  constructor() { }

  ngOnInit() {
    this.genero = this.activatedRoute.snapshot.paramMap.get('genero') as string;

    if (this.genero === 'todas') {
      this.recetas = this.recetasManager.getRecetas();
    } else {
      this.recetas = this.recetasManager.getRecetas().filter(p => p.tipo.includes(this.genero));
    }
  }

}
