import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  telefono = '+56 2 2987 6543';
  email = 'contacto@organizacion-educativa.cl';
  direccion = 'Av. Universitaria 1234, Edificio Central, Piso 2';
}
