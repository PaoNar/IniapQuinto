import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HojasPage } from "./hojas.page";

const routes: Routes = [
  {
    path: "",
    component: HojasPage,
    children: [
      {
        path: "lancha",
        loadChildren: () =>
          import("./lancha/lancha.module").then((m) => m.LanchaPageModule),
      },
      {
        path: "roya",
        loadChildren: () =>
          import("./roya/roya.module").then((m) => m.RoyaPageModule),
      },
      {
        path: "trips",
        loadChildren: () =>
          import("./trips/trips.module").then((m) => m.TripsPageModule),
      },
      {
        path: 'punta-morada',
        loadChildren: () => import('./punta-morada/punta-morada.module').then( m => m.PuntaMoradaPageModule)
      },
      {
        path: 'vdnutricionales',
        loadChildren: () => import('./vdnutricionales/vdnutricionales.module').then( m => m.VdnutricionalesPageModule)
      },
      {
        path: 'punta-morada2',
        loadChildren: () => import('./punta-morada2/punta-morada2.module').then( m => m.PuntaMorada2PageModule)
      },
      {
        path: 'pie-negro',
        loadChildren: () => import('./pie-negro/pie-negro.module').then( m => m.PieNegroPageModule)
      },
      {
        path: 'heladas',
        loadChildren: () => import('./heladas/heladas.module').then( m => m.HeladasPageModule)
      },
      {
        path: 'mosca-minadora',
        loadChildren: () => import('./mosca-minadora/mosca-minadora.module').then( m => m.MoscaMinadoraPageModule)
      },
      {
        path: 'gusano-blanco',
        loadChildren: () => import('./gusano-blanco/gusano-blanco.module').then( m => m.GusanoBlancoPageModule)
      },
      {
        path: 'pulguilla',
        loadChildren: () => import('./pulguilla/pulguilla.module').then( m => m.PulguillaPageModule)
      },
      {
        path: 'virosis',
        loadChildren: () => import('./virosis/virosis.module').then( m => m.VirosisPageModule)
      },
      {
        path: 'virosis2',
        loadChildren: () => import('./virosis2/virosis2.module').then( m => m.Virosis2PageModule)
      }
    ],
  },
  {
    path: "",
    redirectTo: "/hojas/page1",
    pathMatch: "full",
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HojasPageRoutingModule {}
