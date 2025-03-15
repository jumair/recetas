import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'ver-recetas/:genero',
    loadComponent: () => import('./pages/ver-recetas/ver-recetas.page').then( m => m.VerRecetasPage)
  },
  {
    path: 'sel-recetas',
    loadComponent: () => import('./pages/sel-recetas/sel-recetas.page').then( m => m.SelRecetasPage)
  },
  {
    path: 'ver-ingredientes',
    loadComponent: () => import('./pages/ver-ingredientes/ver-ingredientes.page').then( m => m.VerIngredientesPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'graficos',
    loadComponent: () => import('./pages/graficos/graficos.page').then( m => m.GraficosPage)
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'error',
    loadComponent: () => import('./pages/error/error.page').then( m => m.ErrorPage)
  },
  {
    path: '**',
    redirectTo: 'error',
  },
];
