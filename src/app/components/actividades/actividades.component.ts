import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActividadesService } from '../../core/services/actividades.service';
import { Actividad } from '../../core/models/actividad.model';

@Component({
  selector: 'app-actividades',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './actividades.component.html',
  styleUrl: './actividades.component.css'
})
export class ActividadesComponent {
  private actividadesService = inject(ActividadesService);

  actividades = this.actividadesService.actividades;

  nuevoNombre = '';
  nuevaDescripcion = '';
  nuevoHorario = '';

  agregarActividad(): void {
    if (!this.nuevoNombre || !this.nuevaDescripcion || !this.nuevoHorario) {
      alert('Por favor complete todos los campos de la actividad.');
      return;
    }

    this.actividadesService.agregarActividad({
      nombre: this.nuevoNombre,
      descripcion: this.nuevaDescripcion,
      horario: this.nuevoHorario
    });

    this.nuevoNombre = '';
    this.nuevaDescripcion = '';
    this.nuevoHorario = '';
  }

  eliminarActividad(id: number): void {
    if (confirm('¿Está seguro de eliminar esta actividad?')) {
      this.actividadesService.eliminarActividad(id);
    }
  }
}
