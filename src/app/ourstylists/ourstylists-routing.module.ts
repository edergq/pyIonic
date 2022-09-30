import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurstylistsPage } from './ourstylists.page';

const routes: Routes = [
  {
    path: '',
    component: OurstylistsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurstylistsPageRoutingModule {}
