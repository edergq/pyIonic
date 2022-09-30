import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImagegallerypagePage } from './imagegallerypage.page';

const routes: Routes = [
  {
    path: '',
    component: ImagegallerypagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImagegallerypagePageRoutingModule {}
