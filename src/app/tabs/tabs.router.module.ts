import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';
import { CategoryPage } from '../category/category.page';
import { CategoriesPage } from './../categories/categories.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'about',
        outlet: 'about',
        component: AboutPage
      },
      {
        path: 'contact',
        outlet: 'contact',
        component: ContactPage
      },
      {
        path: 'category',
        outlet: 'category',
        component: CategoryPage
      },
      {
        path: 'categories',
        outlet: 'categories',
        component : CategoriesPage
      }
    ]
  }, 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {
  
}
