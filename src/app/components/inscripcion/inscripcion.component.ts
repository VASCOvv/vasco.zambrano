import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActividadesService } from '../../core/services/actividades.service';
import { Actividad } from '../../core/models/actividad.model';

@Component({
  selector: 'app-inscripcion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inscripcion.component.html',
  styleUrl: './inscripcion.component.css'
})
export class InscripcionComponent implements OnInit {
  private fb = inject(FormBuilder);
  private actividadesService = inject(ActividadesService);

  formularioInscripcion!: FormGroup;
  actividades: Actividad[] = [];
  inscripciones = this.actividadesService.inscripciones;
  mensajeExito = false;

  ngOnInit(): void {
    this.actividades = this.actividadesService.getActividades();

    this.formularioInscripcion = this.fb.group({
      nombreEstudiante: ['', [Validators.required, Validators.minLength(3)]],
      rut: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      carrera: ['', [Validators.required]],
      actividadId: ['', [Validators.required]]
    });
  }

  esCampoInvalido(campo: string): boolean {
    const control = this.formularioInscripcion.get(campo);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  onSubmit(): void {
    if (this.formularioInscripcion.invalid) {
      this.formularioInscripcion.markAllAsTouched();
      return;
    }

    this.actividadesService.agregarInscripcion(this.formularioInscripcion.value);
    this.formularioInscripcion.reset();
    this.mensajeExito = true;
    setTimeout(() => this.mensajeExito = false, 4000);
  }

  eliminarInscripcion(id: number): void {
    if (confirm('¿Desea borrar esta inscripción registrada?')) {
      this.actividadesService.eliminarInscripcion(id);
    }
  }
}
