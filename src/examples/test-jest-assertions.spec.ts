// import { describe, it, expect } from "vitest"

describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10
    const string = '10'

    expect(number).toBe(10)
    expect(string).toEqual('10')
    expect(number).not.toBeNull()
    expect(number).toBeGreaterThan(9)
    expect(number).toBeLessThan(11)
    expect(number).toBeCloseTo(10.001)
  })
})

// describe('Primitive values', () => {
//   it('should test vitest assertions', () => {
//     const number = 10
//     const string = '10'

//     expect(number).toBe(10)
//     expect(string).toEqual('10')
//     expect(number).not.toBeNull()
//     expect(number).toBeGreaterThan(9)
//     expect(number).toBeLessThan(11)
//     expect(number).toBeCloseTo(10.001)
//   })
// })