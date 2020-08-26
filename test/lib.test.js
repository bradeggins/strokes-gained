const { calcStrokesGained, validateBool } = require('../lib/lib')


describe('Check calcStrokesGained function example from ESC', () => {
    let hole = {
        holed: "",
        strokes_to_hole:4.0
    }

    let holedHole = {
        holed: 1,
        strokes_to_hole: 1.5
    }

    let nextHole = {
        strokes_to_hole:3.7
    }

    let nullHole = null

    test('Calculates the correct SG for hole, nexthole', () => {
        let actual = calcStrokesGained(hole, nextHole)
        expect(actual).toBe(-0.70)
    })

    test('Calculates the correct SG for hole, nexthole when last shot of hole', () => {
        let actual = calcStrokesGained(holedHole, nextHole)
        expect(actual).toBe(0.50)
    })

    test('Calculates the correct SG for hole when nexthole does not exist', () => {
        let actual = calcStrokesGained(holedHole, nullHole)
        expect(actual).toBe(0.50)
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