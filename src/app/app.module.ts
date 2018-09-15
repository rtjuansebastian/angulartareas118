import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { UsuariosService } from './services/usuarios.service';
import { SessionGuard } from './guards/session.guard';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { InicioComponent } from './inicio/inicio.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { TraerArticulosComponent } from './traer-articulos/traer-articulos.component';
import { MostrarArticuloComponent } from './mostrar-articulo/mostrar-articulo.component';
import { CrearArticuloComponent } from './crear-articulo/crear-articulo.component';
import { ModificarArticuloComponent } from './modificar-articulo/modificar-articulo.component';

const rutas:Routes=[
    {path:"", component:InicioComponent},
    {path:"inicio" , component: InicioComponent},
    {path:"iniciar_sesion", component:IniciarSesionComponent},
    {path:"crear_cuenta", component:CrearCuentaComponent},
    {
      path:"traer_articulos", 
      component:TraerArticulosComponent, 
      canActivate: [SessionGuard]
    },
    {
      path:"mostrar_articulo/:id", 
      component: MostrarArticuloComponent, 
      canActivate:[SessionGuard]
    },
    {
      path:"crear_articulo", 
      component:CrearArticuloComponent, 
      canActivate:[SessionGuard]
    },
    {
      path:"modificar_articulo/:id",
      component: ModificarArticuloComponent,
      canActivate: [SessionGuard]
    },
    {path:"**", redirectTo:"/", pathMatch: "full"}
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PiePaginaComponent,
    InicioComponent,
    IniciarSesionComponent,
    CrearCuentaComponent,
    TraerArticulosComponent,
    MostrarArticuloComponent,
    CrearArticuloComponent,
    ModificarArticuloComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
