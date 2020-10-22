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
    loadChildren: () => import('./publicaciones/publicaciones.module').then( m => m.PublicacionesPageModule)
  },
  {
    path: 'enfermedad',
    loadChildren: () => import('./enfermedad/enfermedad.module').then( m => m.EnfermedadPageModule)
  },
  {
    path: 'plagas',
    loadChildren: () => import('./plagas/plagas.module').then( m => m.PlagasPageModule)
  },
  {
    path: 'respuesta',
    loadChildren: () => import('./respuesta/respuesta.module').then( m => m.RespuestaPageModule)
  },
  {
    path: 'page1',
    loadChildren: () => import('./respuesta2/page1/page1.module').then( m => m.Page1PageModule)
  },
  {
    path: 'respuesta2',
    loadChildren: () => import('./respuesta2/respuesta2.module').then( m => m.Respuesta2PageModule)
  },
  {
    path: 'respuesta3',
    loadChildren: () => import('./respuesta3/respuesta3.module').then( m => m.Respuesta3PageModule)
  },
  {
    path: 'hojas-amarillas',
    loadChildren: () => import('./hojas-amarillas/hojas-amarillas.module').then( m => m.HojasAmarillasPageModule)
  },
  {
    path: 'respuesta2-hojas',
    loadChildren: () => import('./respuesta2-hojas/respuesta2-hojas.module').then( m => m.Respuesta2HojasPageModule)
  },
  {
    path: 'respuesta-hojas',
    loadChildren: () => import('./respuesta-hojas/respuesta-hojas.module').then( m => m.RespuestaHojasPageModule)
  },
  {
    path: 'plantas-pequenas',
    loadChildren: () => import('./plantas-pequenas/plantas-pequenas.module').then( m => m.PlantasPequenasPageModule)
  },
  {
    path: 'hojas2-amarillas',
    loadChildren: () => import('./hojas2-amarillas/hojas2-amarillas.module').then( m => m.Hojas2AmarillasPageModule)
  },
  {
    path: 'hojas-mordidas',
    loadChildren: () => import('./hojas-mordidas/hojas-mordidas.module').then( m => m.HojasMordidasPageModule)
  },
  {
    path: 'respuesta-tallos',
    loadChildren: () => import('./respuesta-tallos/respuesta-tallos.module').then( m => m.RespuestaTallosPageModule)
  },
  {
    path: 'tallos',
    loadChildren: () => import('./tallos/tallos.module').then( m => m.TallosPageModule)
  },
  {
    path: 'respuesta-tuberculo',
    loadChildren: () => import('./respuesta-tuberculo/respuesta-tuberculo.module').then( m => m.RespuestaTuberculoPageModule)
  },
  {
    path: 'tuberculo',
    loadChildren: () => import('./tuberculo/tuberculo.module').then( m => m.TuberculoPageModule)
  },
  {
    path: 'raiz',
    loadChildren: () => import('./raiz/raiz.module').then( m => m.RaizPageModule)
  },
  {
    path: 'respuesta-raiz',
    loadChildren: () => import('./respuesta-raiz/respuesta-raiz.module').then( m => m.RespuestaRaizPageModule)
  },
  {
    path: 'respuesta-insectos',
    loadChildren: () => import('./respuesta-insectos/respuesta-insectos.module').then( m => m.RespuestaInsectosPageModule)
  },
  {
    path: 'hojas',
    loadChildren: () => import('./hojas/hojas.module').then( m => m.HojasPageModule)
  },  {
    path: 'modals',
    loadChildren: () => import('./modals/modals.module').then( m => m.ModalsPageModule)
  },
  {
    path: 'images',
    loadChildren: () => import('./images/images.module').then( m => m.ImagesPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
