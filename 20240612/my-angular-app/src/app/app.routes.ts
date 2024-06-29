import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductGridComponent } from './product-grid/product-grid.component'; // Importa el componente de la página en blanco

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'product-grid', component: ProductGridComponent }, // Ruta para la página en blanco
  { path: '**', redirectTo: '/login' } // Redirige a login si la ruta no existe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export default routes;