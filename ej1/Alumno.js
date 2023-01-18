export default class Alumno {
  /** @type {string} */
  #DNI
  /** @type {string} */
  #nombre
  /** @type {number} */
  #notaMedia

  constructor (DNI, nombre, notaMedia) {
    this.#DNI = DNI
    this.#nombre = nombre
    this.#notaMedia = notaMedia
  }

  getDNI () {
    return this.#DNI
  }

  setDNI (newDNI) {
    this.#DNI = newDNI
    return this
  }

  getNombre () {
    return this.#nombre
  }

  setNombre (newNombre) {
    this.#nombre = newNombre
    return this
  }

  getNotaMedia () {
    return this.#notaMedia
  }

  setNotaMedia (newNotaMedia) {
    this.#notaMedia = newNotaMedia
    return this
  }
}
