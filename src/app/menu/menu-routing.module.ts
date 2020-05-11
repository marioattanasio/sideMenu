import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'page1',
        loadChildren: () => import('../page1/page1.module').then( m => m.Page1PageModule)
      },
      {
        path: 'page2',
        loadChildren: () => import('../page2/page2.module').then( m => m.Page2PageModule)
      },
     
     
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
