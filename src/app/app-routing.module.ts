import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { DetalleComponent } from './paginas/detalle/detalle.component';
import { AgregarComponent } from './paginas/agregar/agregar.component';
import { EditarComponent } from './paginas/editar/editar.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'agregar', component: AgregarComponent},
  {path: 'editar/:id', component: EditarComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
