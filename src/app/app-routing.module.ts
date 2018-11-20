import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
     path: 'login', 
     loadChildren: './login/login.module#LoginPageModule' 
  },
  { 
    path: 'tabs', 
    loadChildren: './tabs/tabs.module#TabsPageModule' 
  },
  { path: 'categories', loadChildren: './categories/categories.module#CategoriesPageModule' },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
