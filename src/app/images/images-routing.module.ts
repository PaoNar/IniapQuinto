import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImagesPage } from './images.page';

const routes: Routes = [
  {
    path: '',
    component: ImagesPage
  },
  {
    path: 'hojasminadas-image',
    loadChildren: () => import('../Images/hojasminadas-image/hojasminadas-image.module').then( m => m.HojasminadasImagePageModule)
  },
  {
    path: 'hojascomidas-image',
    loadChildren: () => import('../Images/hojascomidas-image/hojascomidas-image.module').then( m => m.HojascomidasImagePageModule)
  },
  {
    path: 'engrosamiento-image',
    loadChildren: () => import('../Images/engrosamiento-image/engrosamiento-image.module').then( m => m.EngrosamientoImagePageModule)
  },
  {
    path: 'presenciatuberculos-image',
    loadChildren: () => import('../Images/presenciatuberculos-image/presenciatuberculos-image.module').then( m => m.PresenciatuberculosImagePageModule)
  },
  {
    path: 'huecos-image',
    loadChildren: () => import('../Images/huecos-image/huecos-image.module').then( m => m.HuecosImagePageModule)
  },
  {
    path: 'psilidos-image',
    loadChildren: () => import('../Images/psilidos-image/psilidos-image.module').then( m => m.PsilidosImagePageModule)
  },
  {
    path: 'danosfisiologicos-image',
    loadChildren: () => import('../Images/danosfisiologicos-image/danosfisiologicos-image.module').then( m => m.DanosfisiologicosImagePageModule)
  },
  {
    path: 'pudricion-image',
    loadChildren: () => import('../Images/pudricion-image/pudricion-image.module').then( m => m.PudricionImagePageModule)
  },
  {
    path: 'presenciaagallas-image',
    loadChildren: () => import('../Images/presenciaagallas-image/presenciaagallas-image.module').then( m => m.PresenciaagallasImagePageModule)
  },
  {
    path: 'ampollas-image',
    loadChildren: () => import('../Images/ampollas-image/ampollas-image.module').then( m => m.AmpollasImagePageModule)
  },
  {
    path: 'grietas-image',
    loadChildren: () => import('../Images/grietas-image/grietas-image.module').then( m => m.GrietasImagePageModule)
  },
  {
    path: 'cavidadinterna-image',
    loadChildren: () => import('../Images/cavidadinterna-image/cavidadinterna-image.module').then( m => m.CavidadinternaImagePageModule)
  },
  {
    path: 'rajaduras-image',
    loadChildren: () => import('../Images/rajaduras-image/rajaduras-image.module').then( m => m.RajadurasImagePageModule)
  },
  {
    path: 'agrietamiento-image',
    loadChildren: () => import('../Images/agrietamiento-image/agrietamiento-image.module').then( m => m.AgrietamientoImagePageModule)
  },
  {
    path: 'corazonhueco-image',
    loadChildren: () => import('../Images/corazonhueco-image/corazonhueco-image.module').then( m => m.CorazonhuecoImagePageModule)
  },
  // {
  //   path: 'planta-image',
  //   loadChildren: () => import('../Images/planta-image/planta-image.module').then( m => m.PlantaImagePageModule)
  // },
  // {
  //   path: 'tallos-image',
  //   loadChildren: () => import('../Images/tallos-image/tallos-image.module').then( m => m.TallosImagePageModule)
  // },
  // {
  //   path: 'tuberculo-image',
  //   loadChildren: () => import('../Images/tuberculo-image/tuberculo-image.module').then( m => m.TuberculoImagePageModule)
  // },
  // {
  //   path: 'raiz-image',
  //   loadChildren: () => import('../Images/raiz-image/raiz-image.module').then( m => m.RaizImagePageModule)
  // },
  // {
  //   path: 'insectos-image',
  //   loadChildren: () => import('../Images/insectos-image/insectos-image.module').then( m => m.InsectosImagePageModule)
  // },
  // {
  //   path: 'plantaspequenas-image',
  //   loadChildren: () => import('../Images/plantaspequenas-image/plantaspequenas-image.module').then( m => m.PlantaspequenasImagePageModule)
  // },
  // {
  //   path: 'manchacafe-image',
  //   loadChildren: () => import('../Images/manchacafe-image/manchacafe-image.module').then( m => m.ManchacafeImagePageModule)
  // },
  // {
  //   path: 'pustulas-image',
  //   loadChildren: () => import('../Images/pustulas-image/pustulas-image.module').then( m => m.PustulasImagePageModule)
  // },
  // {
  //   path: 'manchasplateado-image',
  //   loadChildren: () => import('../Images/manchasplateado-image/manchasplateado-image.module').then( m => m.ManchasplateadoImagePageModule)
  // },
  // {
  //   path: 'basetallo-image',
  //   loadChildren: () => import('../Images/basetallo-image/basetallo-image.module').then( m => m.BasetalloImagePageModule)
  // },
  // {
  //   path: 'manchasnegras-image',
  //   loadChildren: () => import('../Images/manchasnegras-image/manchasnegras-image.module').then( m => m.ManchasnegrasImagePageModule)
  // },
  // {
  //   path: 'raicessanas-image',
  //   loadChildren: () => import('../Images/raicessanas-image/raicessanas-image.module').then( m => m.RaicessanasImagePageModule)
  // },
  // {
  //   path: 'presenciabolitas-image',
  //   loadChildren: () => import('../Images/presenciabolitas-image/presenciabolitas-image.module').then( m => m.PresenciabolitasImagePageModule)
  // },
  // {
  //   path: 'roya-image',
  //   loadChildren: () => import('../Images/roya-image/roya-image.module').then( m => m.RoyaImagePageModule)
  // },
  // {
  //   path: 'lancha-image',
  //   loadChildren: () => import('../Images/lancha-image/lancha-image.module').then( m => m.LanchaImagePageModule)
  // },
  // {
  //   path: 'trips-image',
  //   loadChildren: () => import('../Images/trips-image/trips-image.module').then( m => m.TripsImagePageModule)
  // },
  // {
  //   path: 'gusanoblanco-image',
  //   loadChildren: () => import('../Images/gusanoblanco-image/gusanoblanco-image.module').then( m => m.GusanoblancoImagePageModule)
  // },
  // {
  //   path: 'moscaminadora-image',
  //   loadChildren: () => import('../Images/moscaminadora-image/moscaminadora-image.module').then( m => m.MoscaminadoraImagePageModule)
  // },
  // {
  //   path: 'polilla-image',
  //   loadChildren: () => import('../Images/polilla-image/polilla-image.module').then( m => m.PolillaImagePageModule)
  // },
  // {
  //   path: 'virosis-image',
  //   loadChildren: () => import('../Images/virosis-image/virosis-image.module').then( m => m.VirosisImagePageModule)
  // },
  // {
  //   path: 'pienegro-image',
  //   loadChildren: () => import('../Images/pienegro-image/pienegro-image.module').then( m => m.PienegroImagePageModule)
  // },
  // {
  //   path: 'helada-image',
  //   loadChildren: () => import('../Images/helada-image/helada-image.module').then( m => m.HeladaImagePageModule)
  // },
  // {
  //   path: 'costranegra-image',
  //   loadChildren: () => import('../Images/costranegra-image/costranegra-image.module').then( m => m.CostranegraImagePageModule)
  // },
  // {
  //   path: 'nematodos-image',
  //   loadChildren: () => import('../Images/nematodos-image/nematodos-image.module').then( m => m.NematodosImagePageModule)
  // },
  // {
  //   path: 'puntamorada-image',
  //   loadChildren: () => import('../Images/puntamorada-image/puntamorada-image.module').then( m => m.PuntamoradaImagePageModule)
  // },
  // {
  //   path: 'pulguilla-image',
  //   loadChildren: () => import('../Images/pulguilla-image/pulguilla-image.module').then( m => m.PulguillaImagePageModule)
  // },
  // {
  //   path: 'pulgones-image',
  //   loadChildren: () => import('../Images/pulgones-image/pulgones-image.module').then( m => m.PulgonesImagePageModule)
  // },
  // {
  //   path: 'carbon-image',
  //   loadChildren: () => import('../Images/carbon-image/carbon-image.module').then( m => m.CarbonImagePageModule)
  // },
  // {
  //   path: 'sarnapolvorienta-image',
  //   loadChildren: () => import('../Images/sarnapolvorienta-image/sarnapolvorienta-image.module').then( m => m.SarnapolvorientaImagePageModule)
  // },
  // {
  //   path: 'deficiencias-image',
  //   loadChildren: () => import('../Images/deficiencias-image/deficiencias-image.module').then( m => m.DeficienciasImagePageModule)
  // },
  // {
  //   path: 'hojas-image',
  //   loadChildren: () => import('../Images/hojas-image/hojas-image.module').then( m => m.HojasImagePageModule)
  // },
  // {
  //   path: 'hojasmanchas-image',
  //   loadChildren: () => import('../Images/hojasmanchas-image/hojasmanchas-image.module').then( m => m.HojasmanchasImagePageModule)
  // },
  // {
  //   path: 'hojasmoradas-image',
  //   loadChildren: () => import('../Images/hojasmoradas-image/hojasmoradas-image.module').then( m => m.HojasmoradasImagePageModule)
  // },
  // {
  //   path: 'hojasamarillas-image',
  //   loadChildren: () => import('../Images/hojasamarillas-image/hojasamarillas-image.module').then( m => m.HojasamarillasImagePageModule)
  // },
  // {
  //   path: 'hojasmarchitas-image',
  //   loadChildren: () => import('../Images/hojasmarchitas-image/hojasmarchitas-image.module').then( m => m.HojasmarchitasImagePageModule)
  // },
  // {
  //   path: 'hojasmordidas-image',
  //   loadChildren: () => import('../Images/hojasmordidas-image/hojasmordidas-image.module').then( m => m.HojasmordidasImagePageModule)
  // },
  // {
  //   path: 'hojasmosaico-image',
  //   loadChildren: () => import('../Images/hojasmosaico-image/hojasmosaico-image.module').then( m => m.HojasmosaicoImagePageModule)
  // },
  // {
  //   path: 'enrrollamiento-image',
  //   loadChildren: () => import('../Images/enrrollamiento-image/enrrollamiento-image.module').then( m => m.EnrrollamientoImagePageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImagesPageRoutingModule {}
