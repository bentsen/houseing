import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealEstateComponent } from './page/realEstate.component';
import { CardComponent } from '../../components/card/card.component';
import { MatIconModule } from '@angular/material/icon';
import { RealEstateRoutingModule } from './realEstate-routing.module';

@NgModule({
  declarations: [RealEstateComponent, CardComponent],
  imports: [CommonModule, MatIconModule, RealEstateRoutingModule],
})
export class RealEstateModule {}
