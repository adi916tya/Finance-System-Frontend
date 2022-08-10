import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin', loadChildren:() => import('./modules/admin/admin-m/admin-m.module').then(module => module.AdminMModule)
  },
  {
    path: '', loadChildren:() => import('./modules/web/web-m/web-m.module').then(module => module.WebMModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
