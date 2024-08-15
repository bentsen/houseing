import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseComponent } from './page/house.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HouseRoutingModule } from './house-routing.module';

@NgModule({
  declarations: [HouseComponent],
  imports: [
    CommonModule,
    MatIconModule,
    HouseRoutingModule,
    MatProgressSpinnerModule,
  ],
})
export class HouseModule {}
