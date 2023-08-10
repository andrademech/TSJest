// import { describe, it, expect } from "vitest"
import { Persistency } from './persistency'

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks())

  it('should return undefined', () => {
    // sut means System Under Test
    const sut = new Persistency()
    expect(sut.saveOrder()).toBeUndefined()
  })

  it('should call console.log once', () => {
    const sut = new Persistency()
    const consoleSpy = jest.spyOn(console, 'log')

    sut.saveOrder()

    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })

  it('should call console.log with "Pedido salvo com sucesso..."', () => {
    const sut = new Persistency()
    const consoleSpy = jest.spyOn(console, 'log')

    sut.saveOrder()

    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...')
  })
})
