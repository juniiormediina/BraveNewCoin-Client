import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoinsComponent } from './components/coins/coins.component';
import { AdminComponent } from './components/admin/admin.component';
import { ListCurrenciesComponent } from './components/coins/list-currencies/list-currencies.component';
import { CurrencyChangesComponent } from './components/coins/currency-changes/currency-changes.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'coins',
    component: CoinsComponent,
    children: [
      { path: '', redirectTo: 'coins', pathMatch: 'full' },
      {
        path: 'currencyChanges',
        component: CurrencyChangesComponent,
      },
      {
        path: 'listCurrencies',
        component: ListCurrenciesComponent,
      },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signUp',
    component: SignupComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
