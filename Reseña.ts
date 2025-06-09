export class Reseña {
    ID: string;
    rating: number;
    comentario: string;
    fecha: Date;

    constructor(ID: string, rating: number, comentario: string, fecha: Date) {
        this.ID = ID;
        this.rating = rating;
        this.comentario = comentario;
        this.fecha = fecha;
    }

    obtenerDetalles(): string {
        return `ID: ${this.ID} - Rating: ${this.rating} - Comentario: ${this.comentario}`;
    }
}
