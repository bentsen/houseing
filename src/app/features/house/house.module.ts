import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseComponent } from './house.component';
import { HouseRoutingModule } from './house-routing.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [HouseComponent],
  imports: [CommonModule, HouseRoutingModule, MatIconModule],
})
export class HouseModule {}
