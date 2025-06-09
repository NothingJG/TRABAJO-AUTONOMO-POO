export class Libro {
    titulo: string;
    autor: string;
    genero: string;
    cantidadDisponible: number;
    estado: string;
    ratingPromedio: number;

    constructor(titulo: string, autor: string, genero: string, cantidadDisponible: number, estado: string, ratingPromedio: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.cantidadDisponible = cantidadDisponible;
        this.estado = estado;
        this.ratingPromedio = ratingPromedio;
    }

    obtenerDetalles(): string {
        return `${this.titulo} - Autor: ${this.autor} - Género: ${this.genero} - Estado: ${this.estado} - Rating: ${this.ratingPromedio}`;
    }
}
