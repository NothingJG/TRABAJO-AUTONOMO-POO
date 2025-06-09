export class Prestamo {
    ID: string;
    fechaPrestamo: Date;
    fechaDevolucion: Date;
    renovado: boolean;

    constructor(ID: string, fechaPrestamo: Date, fechaDevolucion: Date, renovado: boolean) {
        this.ID = ID;
        this.fechaPrestamo = fechaPrestamo;
        this.fechaDevolucion = fechaDevolucion;
        this.renovado = renovado;
    }

    obtenerDetalles(): string {
        return `ID: ${this.ID} - Prestado: ${this.fechaPrestamo} - Devolución: ${this.fechaDevolucion} - Renovado: ${this.renovado}`;
    }
}
