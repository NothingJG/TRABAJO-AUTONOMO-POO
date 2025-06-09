export class SistemaBiblioteca {
    nombreSistema: string;
    version: string;

    constructor(nombreSistema: string, version: string) {
        this.nombreSistema = nombreSistema;
        this.version = version;
    }

    obtenerDetalles(): string {
        return `${this.nombreSistema} - Versión: ${this.version}`;
    }
}
