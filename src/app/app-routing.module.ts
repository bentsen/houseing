import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('@modules/about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'real-estate',
        loadChildren: () =>
          import('@modules/realEstate/realEstate.module').then(
            (m) => m.RealEstateModule
          ),
      },
      {
        path: 'real-estate/:id',
        loadChildren: () =>
          import('@modules/house/house.module').then((m) => m.HouseModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
