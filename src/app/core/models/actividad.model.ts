export interface Actividad {
  id: number;
  nombre: string;
  descripcion: string;
  horario: string;
}

export interface Inscripcion {
  id: number;
  nombreEstudiante: string;
  rut: string;
  email: string;
  carrera: string;
  actividadId: number;
  actividadNombre: string;
}
