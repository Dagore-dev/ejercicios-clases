import Alumno from './Alumno.js'
import Colegio from './Colegio.js'

// Some Alumno instances
const david = new Alumno('3208671T', 'David Gómez', 10)
const elena = new Alumno('1111111A', 'Elena Gámez', 7.5)

// Some use of getters and setters
console.log('Nombre:', david.getNombre())

david.setNotaMedia(5.00)
console.log('Nota media:', david.getNotaMedia())

// Example of Colegio instance
const colegio = new Colegio('Romero Vargas', 20, david, elena)

console.log('Colegio:', colegio.getNombre())
console.log('Número de alumnos:', colegio.getNumeroAlumnos())
