import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurstylistsPageRoutingModule } from './ourstylists-routing.module';

import { OurstylistsPage } from './ourstylists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurstylistsPageRoutingModule
  ],
  declarations: [OurstylistsPage]
})
export class OurstylistsPageModule {}
