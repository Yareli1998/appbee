import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ObservacionesPageModule } from './pages/crear-bitacora/observaciones/observaciones.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'pagina-principal',
    loadChildren: () => import('./pages/pagina-principal/pagina-principal.module').then( m => m.PaginaPrincipalPageModule)
  },
  {
    path: 'ver-bitacora',
    loadChildren: () => import('./pages/ver-bitacora/ver-bitacora.module').then( m => m.VerBitacoraPageModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import('./pages/agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'crear-bitacora',
    loadChildren: () => import('./pages/crear-bitacora/crear-bitacora.module').then( m => m.CrearBitacoraPageModule)
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./pages/inicio-sesion/inicio-sesion.module').then( m => m.InicioSesionPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'datos-generales',
    loadChildren: () => import('./pages/crear-bitacora/datos-generales/datos-generales.module').then( m => m.DatosGeneralesPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/crear-bitacora/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'manejo-realizado',
    loadChildren: () => import('./pages/crear-bitacora/manejo-realizado/manejo-realizado.module').then( m => m.ManejoRealizadoPageModule)
  },
  {
    path: 'observaciones',
    loadChildren: () => import('./pages/crear-bitacora/observaciones/observaciones.module').then( m => m.ObservacionesPageModule)
  },
  {
    path: 'otros-gastos',
    loadChildren: () => import('./pages/crear-bitacora/otros-gastos/otros-gastos.module').then( m => m.OtrosGastosPageModule)
  },
  {
    path: 'salud-colmena',
    loadChildren: () => import('./pages/crear-bitacora/salud-colmena/salud-colmena.module').then( m => m.SaludColmenaPageModule)
  },
  {
    path: 'produccion',
    loadChildren: () => import('./pages/crear-bitacora/produccion/produccion.module').then( m => m.ProduccionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
