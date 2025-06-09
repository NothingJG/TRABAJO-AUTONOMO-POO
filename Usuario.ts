export class Usuario {
    ID: string;
    fechaAfiliacion: Date;
    esPremium: boolean;

    constructor(ID: string, fechaAfiliacion: Date, esPremium: boolean) {
        this.ID = ID;
        this.fechaAfiliacion = fechaAfiliacion;
        this.esPremium = esPremium;
    }

    obtenerDetalles(): string {
        return `ID: ${this.ID} - Premium: ${this.esPremium} - Afiliación: ${this.fechaAfiliacion}`;
    }
}
