import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideogalleryPage } from './videogallery.page';

const routes: Routes = [
  {
    path: '',
    component: VideogalleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideogalleryPageRoutingModule {}
