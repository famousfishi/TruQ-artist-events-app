import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: '',
    redirectTo: '**', //you can add another path here instead of wildcard
    pathMatch: 'full'
  },
  {
    path: 'tabs-navigation',
    loadChildren: () => import('./pages/tabs-navigation/tabs-navigation.module').then( m => m.TabsNavigationPageModule)
  },
  {
    path: 'search-details',
    loadChildren: () => import('./pages/search-details/search-details.module').then( m => m.SearchDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
