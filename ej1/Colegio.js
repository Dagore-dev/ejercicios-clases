// eslint-disable-next-line
import Alumno from './Alumno.js'

export default class Colegio {
  /** @type {string} */
  #nombre
  /** @type {number} */
  #numeroAulas
  /** @type {Alumno[]} */
  #alumnos

  /**
   * @param {string} nombre
   * @param {string} numeroAulas
   * @param  {Alumno[]} alumnos
   */
  constructor (nombre, numeroAulas, ...alumnos) {
    this.#nombre = nombre
    this.#numeroAulas = numeroAulas
    this.#alumnos = [...alumnos]
  }

  /**
   * @returns {string}
   */
  getNombre () {
    return this.#nombre
  }

  /**
   * @param {string} newNombre
   * @returns {Colegio}
   */
  setNombre (newNombre) {
    this.#nombre = newNombre
    return this
  }

  /**
   * @returns {number}
   */
  getNumeroAulas () {
    return this.#numeroAulas
  }

  /**
   * @param {number} newNumeroAulas
   * @returns {Colegio}
   */
  setNumeroAulas (newNumeroAulas) {
    this.#numeroAulas = newNumeroAulas
    return this
  }

  /**
   * @returns {number}
   */
  getNumeroAlumnos () {
    return this.#alumnos.length
  }
}
