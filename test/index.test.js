/* global describe it */
const expect = require('chai').expect
const cervezas = require('../src/index')

describe('cervezas', () => {
  describe('La lista de todas', () => {
    it('Debería ser un array de objetos', () => {
      expect(cervezas.todas).to.satisfy(isArrayOfObjects)
      // utiliza el método Array.prototype.every()
    })
    it('Debería incluir la cerveza Ambar', () => {
      expect(cervezas.todas).to.satisfy(includesAmbar)
      // utiliza el método Array.prototype.some()
    })
  })
  describe('Elegir una cerveza al azar', () => {
    it('Debería mostrar un elemento de la lista de cervezas', () => {

    })
  })
})

const isArrayOfObjects = array => {
  return array.every(item => {
    return typeof item === 'object'
  })
}

const includesAmbar = array => array.some(
  (cerveza) => cerveza.nombre === 'ÁMBAR ESPECIAL'
)
