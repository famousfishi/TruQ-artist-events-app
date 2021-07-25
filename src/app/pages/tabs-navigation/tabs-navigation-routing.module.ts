import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsNavigationPage } from './tabs-navigation.page';

const routes: Routes = [
  {
    path: '',
    component: TabsNavigationPage,
    children:[
      {
        path: 'home',
        loadChildren: () => import('../../pages/home/home.module').then( m => m.HomePageModule),
        pathMatch: 'full'
      },
      {
        path: 'search-events',
        loadChildren: () => import('../../pages/search-events/search-events.module').then( m => m.SearchEventsPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../../pages/about/about.module').then( m => m.AboutPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs-navigation/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs-navigation/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsNavigationPageRoutingModule {}
