import { Libro } from "./libro";
import { Usuario } from "./usuario";
import { Estudiante } from "./estudiante";
import { Profesor } from "./Profesor";
import { Prestamo } from "./Prestamo";
import { Reseña } from "./reseña";
import { ClubLectura } from "./clublectura";
import { Evento } from "./evento";
import { Notificacion } from "./Notificacion";
import { Reporte } from "./Reporte";
import { SistemaBiblioteca } from "./SistemaBiblioteca";

// Instancias
const libro = new Libro("1984", "George Orwell", "Distopía", 5, "Disponible", 4.7);
console.log(libro.obtenerDetalles());

const usuario = new Usuario("U001", new Date("2023-01-01"), true);
console.log(usuario.obtenerDetalles());

const estudiante = new Estudiante("E001", new Date("2023-02-01"), false, "Ana", "Ingeniería");
console.log(estudiante.obtenerDetalles());

const profesor = new Profesor("P001", new Date("2022-09-15"), true, "Dr. Luis", "Literatura");
console.log(profesor.obtenerDetalles());

const prestamo = new Prestamo("PR001", new Date("2025-06-01"), new Date("2025-06-15"), false);
console.log(prestamo.obtenerDetalles());

const resena = new Reseña("R001", 5, "Excelente libro", new Date("2025-06-07"));
console.log(resena.obtenerDetalles());

const club = new ClubLectura("Amantes de la Ciencia Ficción", "Ciencia Ficción");
console.log(club.obtenerDetalles());

const evento = new Evento(new Date("2025-07-01"), "Encuentro mensual de lectores");
console.log(evento.obtenerDetalles());

const notificacion = new Notificacion("Aviso", "Tienes un libro pendiente de devolver", new Date());
console.log(notificacion.obtenerDetalles());

const reporte = new Reporte("Libros Populares", new Date());
console.log(reporte.obtenerDetalles());

const sistema = new SistemaBiblioteca("Biblioteca Central", "1.0.0");
console.log(sistema.obtenerDetalles());
