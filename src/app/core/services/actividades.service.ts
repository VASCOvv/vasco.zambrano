import { Injectable, signal } from '@angular/core';
import { Actividad, Inscripcion } from '../models/actividad.model';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  // Lista inicial de 4 actividades requeridas por el enunciado
  private listaActividades: Actividad[] = [
    {
      id: 1,
      nombre: 'Taller de Programación Web',
      descripcion: 'Introducción al desarrollo web con HTML, CSS, JavaScript y Angular.',
      horario: 'Jueves 17:00 a 19:00 hrs'
    },
    {
      id: 2,
      nombre: 'Club de Debate y Oratoria',
      descripcion: 'Práctica de expresión oral, argumentación y técnicas de debate.',
      horario: 'Martes 15:30 a 17:30 hrs'
    },
    {
      id: 3,
      nombre: 'Taller de Fotografía Digital',
      descripcion: 'Principios de composición fotográfica y manejo de cámara.',
      horario: 'Viernes 14:00 a 16:00 hrs'
    },
    {
      id: 4,
      nombre: 'Taller de Emprendimiento',
      descripcion: 'Cómo validar ideas de negocio y crear modelos Canvas.',
      horario: 'Miércoles 18:00 a 20:00 hrs'
    }
  ];

  // Lista inicial de inscripciones
  private listaInscripciones: Inscripcion[] = [
    {
      id: 1,
      nombreEstudiante: 'Juan Pérez',
      rut: '19876543-2',
      email: 'juan.perez@estudiante.cl',
      carrera: 'Ingeniería Informática',
      actividadId: 1,
      actividadNombre: 'Taller de Programación Web'
    }
  ];

  // Signals para estado reactivo simple
  public actividades = signal<Actividad[]>(this.listaActividades);
  public inscripciones = signal<Inscripcion[]>(this.listaInscripciones);

  // --- CRUD ACTIVIDADES ---
  getActividades(): Actividad[] {
    return this.actividades();
  }

  agregarActividad(actividad: Omit<Actividad, 'id'>): void {
    const nueva: Actividad = {
      id: Date.now(),
      ...actividad
    };
    const listaActualizada = [...this.actividades(), nueva];
    this.actividades.set(listaActualizada);
  }

  eliminarActividad(id: number): void {
    const listaFiltrada = this.actividades().filter(a => a.id !== id);
    this.actividades.set(listaFiltrada);
  }

  // --- CRUD INSCRIPCIONES ---
  getInscripciones(): Inscripcion[] {
    return this.inscripciones();
  }

  agregarInscripcion(datos: Omit<Inscripcion, 'id' | 'actividadNombre'>): void {
    const act = this.actividades().find(a => a.id === Number(datos.actividadId));
    const nueva: Inscripcion = {
      id: Date.now(),
      ...datos,
      actividadId: Number(datos.actividadId),
      actividadNombre: act ? act.nombre : 'Sin especificar'
    };
    const listaActualizada = [...this.inscripciones(), nueva];
    this.inscripciones.set(listaActualizada);
  }

  eliminarInscripcion(id: number): void {
    const listaFiltrada = this.inscripciones().filter(i => i.id !== id);
    this.inscripciones.set(listaFiltrada);
  }
}
