import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'p1',
    loadChildren: () => import('./p1/p1.module').then( m => m.P1PageModule)
  },
  {
    path: 'reservation',
    loadChildren: () => import('./reservation/reservation.module').then( m => m.ReservationPageModule)
  },
  {
    path: 'boutique',
    loadChildren: () => import('./boutique/boutique.module').then( m => m.BoutiquePageModule)
  },
  {
    path: 'propos',
    loadChildren: () => import('./propos/propos.module').then( m => m.ProposPageModule)
  },
  {
    path: 'reglage',
    loadChildren: () => import('./reglage/reglage.module').then( m => m.ReglagePageModule)
  },
  {
    path: 'carthage',
    loadChildren: () => import('./carthage/carthage.module').then( m => m.CarthagePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'chercher',
    loadChildren: () => import('./chercher/chercher.module').then( m => m.ChercherPageModule)
  },
  {
    path: 'souvenirs',
    loadChildren: () => import('./souvenirs/souvenirs.module').then( m => m.SouvenirsPageModule)
  },
  {
    path: 'downloaded',
    loadChildren: () => import('./downloaded/downloaded.module').then( m => m.DownloadedPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'personnalise',
    loadChildren: () => import('./personnalise/personnalise.module').then( m => m.PersonnalisePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
