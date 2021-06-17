import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';



const routes: Routes = [
  { path: $localize`login`, component: LoginPageComponent },
  { path: '', redirectTo: $localize`/login`, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserAuthRoutingModule { }
