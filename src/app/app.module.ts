import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { DetalleComponent } from './paginas/detalle/detalle.component';
import { AgregarComponent } from './paginas/agregar/agregar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarComponent } from './paginas/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetalleComponent,
    AgregarComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
