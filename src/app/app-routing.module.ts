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
    path: 'tuberculos',
    loadChildren: () => import('./pages/tuberculos/tuberculos.module').then( m => m.TuberculosPageModule)
  },
  {
    path: 'cereales',
    loadChildren: () => import('./pages/cereales/cereales.module').then( m => m.CerealesPageModule)
  },
  {
    path: 'cacao',
    loadChildren: () => import('./pages/cacao/cacao.module').then( m => m.CacaoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
