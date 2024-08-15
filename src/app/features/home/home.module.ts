import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent, // Declare the AboutComponent
  ],
  imports: [
    CommonModule, // Import CommonModule for common directives
    HomeRoutingModule, // Import the routing module specific to About
  ],
})
export class HomeModule {}
