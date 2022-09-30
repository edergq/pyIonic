import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpeninghoursPageRoutingModule } from './openinghours-routing.module';

import { OpeninghoursPage } from './openinghours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpeninghoursPageRoutingModule
  ],
  declarations: [OpeninghoursPage]
})
export class OpeninghoursPageModule {}
