import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ServicesComponent } from './pages/services/services.component';
import { ConsultancyComponent } from './pages/consultancy/consultancy.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path: 'home', component: PrincipalComponent},
  {path: 'about', component:AboutComponent}, 
  {path: 'services', component:ServicesComponent}, 
  {path: 'consultancy', component:ConsultancyComponent}, 
  {path: 'faq', component:FaqComponent}, 
  {path: 'contact', component:ContactComponent}, 
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
