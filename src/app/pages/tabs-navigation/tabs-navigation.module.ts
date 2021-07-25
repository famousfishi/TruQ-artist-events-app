import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsNavigationPageRoutingModule } from './tabs-navigation-routing.module';

import { TabsNavigationPage } from './tabs-navigation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsNavigationPageRoutingModule
  ],
  declarations: [TabsNavigationPage]
})
export class TabsNavigationPageModule {}
