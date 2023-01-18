import Vuelo from './Vuelo.js'
import Aeropuerto from './Aeropuerto.js'

const exampleDate1 = new Date(2023, 1, 17)
const exampleDate2 = new Date(2023, 1, 18, 5)
const exampleDate3 = new Date(2023, 1, 18, 8)

const fly1 = new Vuelo('1111a', exampleDate1, exampleDate2)
const fly2 = new Vuelo('2222b', exampleDate1, exampleDate2)

// Este vuelo falla porque su hora de salida es mayor que la de llegada
// const fly3 = new Vuelo('3333c', exampleDate3, exampleDate1)

console.log('Código:', fly1.getCodigo())
console.log('Hora llegada:', fly1.getHoraLlegada())
console.log('Hora salida:', fly1.getHoraSalida())

fly1.setHoraLlegada(exampleDate2)
console.log('Hora llegada actualizada:', fly1.getHoraLlegada())

// Este setter falla porque haría que la hora de salida sea mayor que la hora de llegada
// fly2.setHoraSalida(exampleDate3)

console.log()

const airport = new Aeropuerto('El Prat', 'Barcelona', fly1, fly2)

console.log('Nombre del aeropuerto:', airport.getNombre())
console.log('Número de vuelos diarios:', airport.getNumeroVuelosDiarios())
