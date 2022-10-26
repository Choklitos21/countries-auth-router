import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CountryListComponent} from "./country-list/country-list.component";
import {FormComponent} from "./form/form.component";
import {HomeComponent} from "./home/home.component";
import {BlogComponent} from "./blog/blog.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'countries', component: CountryListComponent},
  {path: 'form', component: FormComponent},
  {path: 'blog', component: BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
