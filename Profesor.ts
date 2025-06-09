import { Usuario } from "./usuario";

export class Profesor extends Usuario {
    nombre: string;
    departamento: string;

    constructor(ID: string, fechaAfiliacion: Date, esPremium: boolean, nombre: string, departamento: string) {
        super(ID, fechaAfiliacion, esPremium);
        this.nombre = nombre;
        this.departamento = departamento;
    }

    obtenerDetalles(): string {
        return `${this.nombre} - Departamento: ${this.departamento}`;
    }
}
