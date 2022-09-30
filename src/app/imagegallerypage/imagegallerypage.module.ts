import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImagegallerypagePageRoutingModule } from './imagegallerypage-routing.module';

import { ImagegallerypagePage } from './imagegallerypage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImagegallerypagePageRoutingModule
  ],
  declarations: [ImagegallerypagePage]
})
export class ImagegallerypagePageModule {}
