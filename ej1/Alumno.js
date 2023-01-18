export default class Alumno {
  /** @type {string} */
  #DNI
  /** @type {string} */
  #nombre
  /** @type {number} */
  #notaMedia

  /**
   * @param {string} DNI
   * @param {string} nombre
   * @param {number} notaMedia
   */
  constructor (DNI, nombre, notaMedia) {
    this.#DNI = DNI
    this.#nombre = nombre
    this.#notaMedia = notaMedia
  }

  /**
   * @returns {string}
   */
  getDNI () {
    return this.#DNI
  }

  /**
   * @param {string} newDNI
   * @returns {Alumno}
   */
  setDNI (newDNI) {
    this.#DNI = newDNI
    return this
  }

  /**
   * @returns {string}
   */
  getNombre () {
    return this.#nombre
  }

  /**
   * @param {string} newNombre
   * @returns {Alumno}
   */
  setNombre (newNombre) {
    this.#nombre = newNombre
    return this
  }

  /**
   * @returns {number}
   */
  getNotaMedia () {
    return this.#notaMedia
  }

  /**
   * @param {number} newNotaMedia
   * @returns {Alumno}
   */
  setNotaMedia (newNotaMedia) {
    this.#notaMedia = newNotaMedia
    return this
  }
}
