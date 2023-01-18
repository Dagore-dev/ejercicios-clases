// eslint-disable-next-line
import Vuelo from './Vuelo.js'

export default class Aeropuerto {
  /** @type {string} */
  #nombre
  /** @type {string} */
  #ciudad
  /** @type {Vuelo[]} */
  #vuelos

  /**
   * @param {string} nombre
   * @param {string} ciudad
   * @param  {Vuelo[]} vuelos
   */
  constructor (nombre, ciudad, ...vuelos) {
    this.#nombre = nombre
    this.#ciudad = ciudad
    this.#vuelos = [...vuelos]
  }

  /**
   * @returns {string}
   */
  getNombre () {
    return this.#nombre
  }

  /**
   * @param {string} nombre
   * @returns {string}
   */
  setNombre (nombre) {
    this.#nombre = nombre
    return this
  }

  /**
   * @returns {string}
   */
  getCiudad () {
    return this.#ciudad
  }

  /**
   * @param {string} ciudad
   * @returns {string}
   */
  setCiudad (ciudad) {
    this.#ciudad = ciudad
    return this
  }

  /**
   * @returns {number}
   */
  getNumeroVuelosDiarios () {
    return this.#vuelos.length
  }
}
