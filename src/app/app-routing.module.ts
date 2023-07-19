import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from 'src/app/components/authentication/authentication.component';
import { LandingPageComponent } from 'src/app/components/landing-page/landing-page.component';
import { FourOFourComponent } from './components/four-o-four/four-o-four.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: AuthenticationComponent },
  { path: 'register', component: AuthenticationComponent },
  { path: 'product', component: ProductComponent },
  { path: '**', component: FourOFourComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
