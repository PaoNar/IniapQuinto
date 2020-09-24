import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'publicaciones',
    loadChildren: () => import('./menu/publicaciones/publicaciones.module').then( m => m.PublicacionesPageModule)
  },
  {
    path: 'enfermedades',
    loadChildren: () => import('./menu/enfermedades/enfermedades.module').then( m => m.EnfermedadesPageModule)
  },
  {
    path: 'informacion',
    loadChildren: () => import('./menu/informacion/informacion.module').then( m => m.InformacionPageModule)
  },
  {
    path: 'enfermedad',
    loadChildren: () => import('./enfermedad/enfermedad.module').then( m => m.EnfermedadPageModule)
  },
  {
    path: 'plagas',
    loadChildren: () => import('./plagas/plagas.module').then( m => m.PlagasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
