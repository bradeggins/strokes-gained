const { calcStrokesGained, validateBool } = require('../lib/lib')

describe('Check calcStrokesGained function example from ESC', () => {
    test('Calculates the correct SG for hole, nexthole', () => {
        let actual = calcStrokesGained(4.0, 3.7)
        expect(actual).toBe(-0.70)
    })

    test('Calculates the correct SG for hole, nexthole', () => {
        let actual = calcStrokesGained(3.7, 3.2)
        expect(actual).toBe(-0.50)
    })

    test('Calculates the correct SG for hole, nexthole', () => {
        let actual = calcStrokesGained(3.2, 1.8)
        expect(actual).toBe(0.40)
    })

    test('Calculates the correct SG for hole, nexthole', () => {
        let actual = calcStrokesGained(1.8, 0)
        expect(actual).toBe(0.80)
    })

    test('Calculates the correct SG for hole when nexthole does not exist', () => {
        let actual = calcStrokesGained(1.8)
        expect(actual).toBe(0.80)
    })
})

describe('Check validateBool function', () => {
    test('Check function returns correct values', () => {
        expect.assertions(3)
        expect(validateBool("true")).toBe(1)
        expect(validateBool(0)).toBe("")
        expect(validateBool(null)).toBe("")


    })
})