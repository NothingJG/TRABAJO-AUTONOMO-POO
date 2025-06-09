export class ClubLectura {
    nombre: string;
    generoEnfoque: string;

    constructor(nombre: string, generoEnfoque: string) {
        this.nombre = nombre;
        this.generoEnfoque = generoEnfoque;
    }

    obtenerDetalles(): string {
        return `${this.nombre} - Enfoque: ${this.generoEnfoque}`;
    }
}
