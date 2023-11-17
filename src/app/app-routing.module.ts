import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [{path:'login',component:LoginComponent},{
  path: '**', // El wildcard '**' atrapa cualquier ruta que no coincida con las rutas anteriores
  redirectTo: '/login', // Redirige a la ruta deseada
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
