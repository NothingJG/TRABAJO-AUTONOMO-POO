import { Usuario } from "./usuario";

export class Estudiante extends Usuario {
    nombre: string;
    carrera: string;

    constructor(ID: string, fechaAfiliacion: Date, esPremium: boolean, nombre: string, carrera: string) {
        super(ID, fechaAfiliacion, esPremium);
        this.nombre = nombre;
        this.carrera = carrera;
    }

    obtenerDetalles(): string {
        return `${this.nombre} - Carrera: ${this.carrera}`;
    }
}
