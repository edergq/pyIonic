import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideogalleryPageRoutingModule } from './videogallery-routing.module';

import { VideogalleryPage } from './videogallery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideogalleryPageRoutingModule
  ],
  declarations: [VideogalleryPage]
})
export class VideogalleryPageModule {}
