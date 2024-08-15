import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealEstateComponent } from './realEstate.component';
import { HouseComponent } from '../house/house.component';

const routes: Routes = [
  { path: '', component: RealEstateComponent },
  { path: ':id', component: HouseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealEstateRoutingModule {}
