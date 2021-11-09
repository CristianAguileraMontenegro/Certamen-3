import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VentanaInicialComponent} from '../app/screens/ventana-inicial/ventana-inicial.component';
import {FormularioComponent} from '../app/screens/formulario/formulario.component';

const routes: Routes = [
  {path:"",redirectTo:"/inicio",pathMatch:"full"},
  {path:"inicio",component:VentanaInicialComponent},
  {path:"cambiarDia",component:FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
