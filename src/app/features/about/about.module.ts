import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  declarations: [
    AboutComponent, // Declare the AboutComponent
  ],
  imports: [
    CommonModule, // Import CommonModule for common directives
    AboutRoutingModule, // Import the routing module specific to About
  ],
})
export class AboutModule {}
