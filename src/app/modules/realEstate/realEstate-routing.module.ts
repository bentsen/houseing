import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RealEstateComponent } from './page/realEstate.component';

const routes: Routes = [
  {
    path: '',
    component: RealEstateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealEstateRoutingModule {}
