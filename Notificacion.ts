export class Notificacion {
    tipo: string;
    mensaje: string;
    fechaEnvio: Date;

    constructor(tipo: string, mensaje: string, fechaEnvio: Date) {
        this.tipo = tipo;
        this.mensaje = mensaje;
        this.fechaEnvio = fechaEnvio;
    }

    obtenerDetalles(): string {
        return `${this.tipo} - Mensaje: ${this.mensaje} - Enviado: ${this.fechaEnvio}`;
    }
}

  