import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealEstateComponent } from './realEstate.component';
import { RealEstateRoutingModule } from './realEstate-routing.module';
import { CardComponent } from '../../components/card/card.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [RealEstateComponent, CardComponent],
  imports: [CommonModule, RealEstateRoutingModule, MatIconModule],
})
export class RealEstateModule {}
