import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewandratingPageRoutingModule } from './reviewandrating-routing.module';

import { ReviewandratingPage } from './reviewandrating.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewandratingPageRoutingModule
  ],
  declarations: [ReviewandratingPage]
})
export class ReviewandratingPageModule {}
