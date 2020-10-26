import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalsPage } from './modals.page';

const routes: Routes = [
  {
    path: '',
    component: ModalsPage,
    children: [
      {
        path: 'toda-planta',
        loadChildren: () => import('../Modals/toda-planta/toda-planta.module').then(m => m.TodaPlantaPageModule)
      }
    ],
  },
  {
    path: '',
    redirectTo: '/models/',
    pathMatch: 'full'
  },
  {
    path: 'agrietamiento-modal',
    loadChildren: () => import('../Modals/agrietamiento-modal/agrietamiento-modal.module').then( m => m.AgrietamientoModalPageModule)
  },
  {
    path: 'corazonhueco-modal',
    loadChildren: () => import('../Modals/corazonhueco-modal/corazonhueco-modal.module').then( m => m.CorazonhuecoModalPageModule)
  },
  // {
  //   path: 'pulguilla-modal',
  //   loadChildren: () => import('../Modals/pulguilla-modal/pulguilla-modal.module').then( m => m.PulguillaModalPageModule)
  // },
  // {
  //   path: 'hojas',
  //   loadChildren: () => import('../Modals/hojas/hojas.module').then( m => m.HojasPageModule)
  // },
  // {
  //   path: 'tallo',
  //   loadChildren: () => import('../Modals/tallo/tallo.module').then( m => m.TalloPageModule)
  // },
  // {
  //   path: 'tuberculo',
  //   loadChildren: () => import('../Modals/tuberculo/tuberculo.module').then( m => m.TuberculoPageModule)
  // },
  // {
  //   path: 'raiz-modal',
  //   loadChildren: () => import('../Modals/raiz-modal/raiz-modal.module').then( m => m.RaizModalPageModule)
  // },
  // {
  //   path: 'insectos-modal',
  //   loadChildren: () => import('../Modals/insectos-modal/insectos-modal.module').then( m => m.InsectosModalPageModule)
  // },
  // {
  //   path: 'hojas-manchas',
  //   loadChildren: () => import('../Modals/hojas-manchas/hojas-manchas.module').then( m => m.HojasManchasPageModule)
  // },
  // {
  //   path: 'hojas-moradas-modal',
  //   loadChildren: () => import('../Modals/hojas-moradas-modal/hojas-moradas-modal.module').then( m => m.HojasMoradasModalPageModule)
  // },
  // {
  //   path: 'hojas-amarillas-modal',
  //   loadChildren: () => import('../Modals/hojas-amarillas-modal/hojas-amarillas-modal.module').then( m => m.HojasAmarillasModalPageModule)
  // },
  // {
  //   path: 'hojas-marchitas-modal',
  //   loadChildren: () => import('../Modals/hojas-marchitas-modal/hojas-marchitas-modal.module').then( m => m.HojasMarchitasModalPageModule)
  // },
  // {
  //   path: 'plantaspequenas-modal',
  //   loadChildren: () => import('../Modals/plantaspequenas-modal/plantaspequenas-modal.module').then( m => m.PlantaspequenasModalPageModule)
  // },
  // {
  //   path: 'mosaico-modal',
  //   loadChildren: () => import('../Modals/mosaico-modal/mosaico-modal.module').then( m => m.MosaicoModalPageModule)
  // },
  // {
  //   path: 'enrrolamiento-modal',
  //   loadChildren: () => import('../Modals/enrrolamiento-modal/enrrolamiento-modal.module').then( m => m.EnrrolamientoModalPageModule)
  // },
  // {
  //   path: 'mancha-cafe-modal',
  //   loadChildren: () => import('../Modals/mancha-cafe-modal/mancha-cafe-modal.module').then( m => m.ManchaCafeModalPageModule)
  // },
  // {
  //   path: 'pustulas-modal',
  //   loadChildren: () => import('../Modals/pustulas-modal/pustulas-modal.module').then( m => m.PustulasModalPageModule)
  // },
  // {
  //   path: 'manchas-plateado-modal',
  //   loadChildren: () => import('../Modals/manchas-plateado-modal/manchas-plateado-modal.module').then( m => m.ManchasPlateadoModalPageModule)
  // },
  // {
  //   path: 'base-tallo-modal',
  //   loadChildren: () => import('../Modals/base-tallo-modal/base-tallo-modal.module').then( m => m.BaseTalloModalPageModule)
  // },
  // {
  //   path: 'mancha-negra-modal',
  //   loadChildren: () => import('../Modals/mancha-negra-modal/mancha-negra-modal.module').then( m => m.ManchaNegraModalPageModule)
  // },
  // {
  //   path: 'presencia-bolitas-modal',
  //   loadChildren: () => import('../Modals/presencia-bolitas-modal/presencia-bolitas-modal.module').then( m => m.PresenciaBolitasModalPageModule)
  // },
  // {
  //   path: 'raices-sanas-modal',
  //   loadChildren: () => import('../Modals/raices-sanas-modal/raices-sanas-modal.module').then( m => m.RaicesSanasModalPageModule)
  // },
  // {
  //   path: 'hojas-mordidas-modal',
  //   loadChildren: () => import('../Modals/hojas-mordidas-modal/hojas-mordidas-modal.module').then( m => m.HojasMordidasModalPageModule)
  // },
  // {
  //   path: 'hojas-minadas-modal',
  //   loadChildren: () => import('../Modals/hojas-minadas-modal/hojas-minadas-modal.module').then( m => m.HojasMinadasModalPageModule)
  // },
  // {
  //   path: 'hojas-comidas-modal',
  //   loadChildren: () => import('../Modals/hojas-comidas-modal/hojas-comidas-modal.module').then( m => m.HojasComidasModalPageModule)
  // },
  // {
  //   path: 'engrosamiento-modal',
  //   loadChildren: () => import('../Modals/engrosamiento-modal/engrosamiento-modal.module').then( m => m.EngrosamientoModalPageModule)
  // },
  // {
  //   path: 'presencia-tuberculos-modal',
  //   loadChildren: () => import('../Modals/presencia-tuberculos-modal/presencia-tuberculos-modal.module').then( m => m.PresenciaTuberculosModalPageModule)
  // },
  // {
  //   path: 'huecos-modal',
  //   loadChildren: () => import('../Modals/huecos-modal/huecos-modal.module').then( m => m.HuecosModalPageModule)
  // },
  // {
  //   path: 'pudricion-modal',
  //   loadChildren: () => import('../Modals/pudricion-modal/pudricion-modal.module').then( m => m.PudricionModalPageModule)
  // },
  // {
  //   path: 'presencia-agallas-modal',
  //   loadChildren: () => import('../Modals/presencia-agallas-modal/presencia-agallas-modal.module').then( m => m.PresenciaAgallasModalPageModule)
  // },
  // {
  //   path: 'costra-negra-modal',
  //   loadChildren: () => import('../Modals/costra-negra-modal/costra-negra-modal.module').then( m => m.CostraNegraModalPageModule)
  // },
  // {
  //   path: 'ampollas-modal',
  //   loadChildren: () => import('../Modals/ampollas-modal/ampollas-modal.module').then( m => m.AmpollasModalPageModule)
  // },
  // {
  //   path: 'grietas-modal',
  //   loadChildren: () => import('../Modals/grietas-modal/grietas-modal.module').then( m => m.GrietasModalPageModule)
  // },
  // {
  //   path: 'cavidad-interna-modal',
  //   loadChildren: () => import('../Modals/cavidad-interna-modal/cavidad-interna-modal.module').then( m => m.CavidadInternaModalPageModule)
  // },
  // {
  //   path: 'rajaduras-modal',
  //   loadChildren: () => import('../Modals/rajaduras-modal/rajaduras-modal.module').then( m => m.RajadurasModalPageModule)
  // },
  // {
  //   path: 'gusano-blanco-modal',
  //   loadChildren: () => import('../Modals/gusano-blanco-modal/gusano-blanco-modal.module').then( m => m.GusanoBlancoModalPageModule)
  // },
  // {
  //   path: 'polilla-modal',
  //   loadChildren: () => import('../Modals/polilla-modal/polilla-modal.module').then( m => m.PolillaModalPageModule)
  // },
  // {
  //   path: 'psilidos-modal',
  //   loadChildren: () => import('../Modals/psilidos-modal/psilidos-modal.module').then( m => m.PsilidosModalPageModule)
  // },
  // {
  //   path: 'pulgones-modal',
  //   loadChildren: () => import('../Modals/pulgones-modal/pulgones-modal.module').then( m => m.PulgonesModalPageModule)
  // },
  // {
  //   path: 'roya-modal',
  //   loadChildren: () => import('../Modals/roya-modal/roya-modal.module').then( m => m.RoyaModalPageModule)
  // },
  // {
  //   path: 'lancha-modal',
  //   loadChildren: () => import('../Modals/lancha-modal/lancha-modal.module').then( m => m.LanchaModalPageModule)
  // },
  // {
  //   path: 'trips-modal',
  //   loadChildren: () => import('../Modals/trips-modal/trips-modal.module').then( m => m.TripsModalPageModule)
  // },
  // {
  //   path: 'mosca-minadora-modal',
  //   loadChildren: () => import('../Modals/mosca-minadora-modal/mosca-minadora-modal.module').then( m => m.MoscaMinadoraModalPageModule)
  // },
  // {
  //   path: 'virosis-modal',
  //   loadChildren: () => import('../Modals/virosis-modal/virosis-modal.module').then( m => m.VirosisModalPageModule)
  // },
  // {
  //   path: 'helada-modal',
  //   loadChildren: () => import('../Modals/helada-modal/helada-modal.module').then( m => m.HeladaModalPageModule)
  // },
  // {
  //   path: 'nematodos-modal',
  //   loadChildren: () => import('../Modals/nematodos-modal/nematodos-modal.module').then( m => m.NematodosModalPageModule)
  // },
  // {
  //   path: 'pienegro-modal',
  //   loadChildren: () => import('../Modals/pienegro-modal/pienegro-modal.module').then( m => m.PienegroModalPageModule)
  // },
  // {
  //   path: 'punta-morada-modal',
  //   loadChildren: () => import('../Modals/punta-morada-modal/punta-morada-modal.module').then( m => m.PuntaMoradaModalPageModule)
  // },
  // {
  //   path: 'deficienciasnutricionales-modal',
  //   loadChildren: () => import('../Modals/deficienciasnutricionales-modal/deficienciasnutricionales-modal.module').then( m => m.DeficienciasnutricionalesModalPageModule)
  // },
  // {
  //   path: 'carbon-modal',
  //   loadChildren: () => import('../Modals/carbon-modal/carbon-modal.module').then( m => m.CarbonModalPageModule)
  // },
  // {
  //   path: 'sarnapolvorienta-modal',
  //   loadChildren: () => import('../Modals/sarnapolvorienta-modal/sarnapolvorienta-modal.module').then( m => m.SarnapolvorientaModalPageModule)
  // },
  // {
  //   path: 'danosfisiologicos-modal',
  //   loadChildren: () => import('../Modals/danosfisiologicos-modal/danosfisiologicos-modal.module').then( m => m.DanosfisiologicosModalPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalsPageRoutingModule { }
