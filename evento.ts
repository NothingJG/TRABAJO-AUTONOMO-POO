export class Evento {
    fecha: Date;
    tema: string;

    constructor(fecha: Date, tema: string) {
        this.fecha = fecha;
        this.tema = tema;
    }

    obtenerDetalles(): string {
        return `${this.tema} - Fecha: ${this.fecha}`;
    }
}
