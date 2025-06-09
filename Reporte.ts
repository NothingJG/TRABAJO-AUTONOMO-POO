export class Reporte {
    tipo: string;
    fechaGeneracion: Date;

    constructor(tipo: string, fechaGeneracion: Date) {
        this.tipo = tipo;
        this.fechaGeneracion = fechaGeneracion;
    }

    obtenerDetalles(): string {
        return `Tipo: ${this.tipo} - Generado: ${this.fechaGeneracion}`;
    }
}
