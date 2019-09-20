//library
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './services/auth.service';
//component
import { PagesComponent } from './pages/pages.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
    {path : 'auth' , component: AuthComponent},
    { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule', canActivate:[AuthGuard]},
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: '**', redirectTo: 'pages' },
  ];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule {
}