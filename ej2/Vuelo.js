export default class Vuelo {
  /** @type {string} */
  #codigo
  /** @type {Date} */
  #hora_llegada
  /** @type {Date} */
  #hora_salida

  /**
   * @param {string} codigo
   * @param {Date} horaSalida
   * @param {Date} horaLlegada
   */
  constructor (codigo, horaSalida, horaLlegada) {
    if (horaLlegada.getTime() < horaSalida.getTime()) {
      throw new Error('La hora de llegada no puede ser menor que la hora de salida')
    }

    this.#codigo = codigo
    this.#hora_llegada = horaLlegada
    this.#hora_salida = horaSalida
  }

  /**
   * @returns {string}
   */
  getCodigo () {
    return this.#codigo
  }

  /**
   * @returns {Date?}
   */
  getHoraLlegada () {
    return this.#hora_llegada
  }

  /**
   * @param {Date} newHoraLlegada
   * @returns {Vuelo}
   */
  setHoraLlegada (newHoraLlegada) {
    if (newHoraLlegada.getTime() < this.#hora_salida.getTime()) {
      throw new Error('La hora de llegada no puede ser menor que la hora de salida')
    }

    this.#hora_llegada = newHoraLlegada
    return this
  }

  /**
   * @returns {Date?}
   */
  getHoraSalida () {
    return this.#hora_salida
  }

  /**
  * @param {Date} newHoraSalida
  * @returns {Vuelo}
  */
  setHoraSalida (newHoraSalida) {
    if (this.#hora_llegada.getTime() < newHoraSalida.getTime()) {
      throw new Error('La hora de llegada no puede ser menor que la hora de salida')
    }

    this.#hora_salida = newHoraSalida
    return this
  }
}
