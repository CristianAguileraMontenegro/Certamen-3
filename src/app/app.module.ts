import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { VentanaInicialComponent } from './screens/ventana-inicial/ventana-inicial.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FormularioComponent } from './screens/formulario/formulario.component';
import {ReactiveFormsModule} from '@angular/forms' /* permite formuoarios reactivos*/

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VentanaInicialComponent,
    NavbarComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
