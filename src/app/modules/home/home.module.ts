import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HomeComponent, // Declare the AboutComponent
  ],
  imports: [CommonModule, HomeRoutingModule, MatIconModule, FormsModule],
})
export class HomeModule {}
