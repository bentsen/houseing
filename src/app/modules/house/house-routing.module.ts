import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HouseComponent } from './page/house.component';

const routes: Routes = [
  {
    path: '',
    component: HouseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseRoutingModule {}
