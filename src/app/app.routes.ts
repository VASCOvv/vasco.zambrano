import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent, title: 'Portal - Inicio' },
  { path: 'actividades', component: ActividadesComponent, title: 'Portal - Actividades' },
  { path: 'inscripcion', component: InscripcionComponent, title: 'Portal - Inscripción' },
  { path: 'contacto', component: ContactoComponent, title: 'Portal - Contacto' },
  { path: '**', redirectTo: 'inicio' }
];
