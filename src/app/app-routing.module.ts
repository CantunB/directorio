import { LoginComponent } from './componentes/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ListarUsuariosComponent } from './componentes/usuarios/listar/listar.component';
import { CrearUsuariosComponent } from './componentes/usuarios/crear/crear.component';
import { EditarUsuariosComponent } from './componentes/usuarios/editar/editar.component';
import { CrearEmpresasComponent } from './componentes/empresas/crear/crear.component';
import { EditarEmpresasComponent } from './componentes/empresas/editar/editar.component';
import { ListarEmpresasComponent } from './componentes/empresas/listar/listar.component';
import { RegistrarComponent } from './componentes/login/registrar/registrar.component';

const routes: Routes = [
  {path: 'login', pathMatch:'full' , redirectTo: 'login'},
  {path: 'inicio', component: InicioComponent },
  {path: 'login', component: LoginComponent },
  {path: 'registrar', component: RegistrarComponent },
  {path: 'usuarios', component: ListarUsuariosComponent },
  {path: 'usuarios/crear', component: CrearUsuariosComponent },
  {path: 'usuarios/editar/:id', component: EditarUsuariosComponent },
  {path: 'empresas', component: ListarEmpresasComponent },
  {path: 'empresas/crear', component: CrearEmpresasComponent },
  {path: 'empresas/editar/:id', component: EditarEmpresasComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
