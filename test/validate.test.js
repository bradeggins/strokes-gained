const { isValidTypeDist, invalidFwyRoughSand, invalidTee, invalidGreen, isNotNull} = require('../lib/validate')


describe('Check isValidTypeDist function', () => {
    test('Check function for greater than 550m', () => {
        let actual = isValidTypeDist('F', 550)
        let expected = false
        expect(actual).toBe(expected)
    })

    test("Check returns true for valid data", () => {
        expect.assertions(4)
        expect(isValidTypeDist({shot_from:'F',dist_to_hole: 549})).toBeTruthy()
        expect(isValidTypeDist({shot_from:'R',dist_to_hole: 5})).toBeTruthy()
        expect(isValidTypeDist({shot_from:'RC',dist_to_hole: 9})).toBeTruthy()
        expect(isValidTypeDist({shot_from:'G',dist_to_hole: 0.3})).toBeTruthy()
    })

    test("Check returns true for valid data at high end or range", () => {
        expect.assertions(5)
        expect(isValidTypeDist({shot_from:'F',dist_to_hole: 549})).toBeTruthy()
        expect(isValidTypeDist({shot_from:'R',dist_to_hole: 549})).toBeTruthy()
        expect(isValidTypeDist({shot_from:'S',dist_to_hole:549})).toBeTruthy()
        expect(isValidTypeDist({shot_from:'RC',dist_to_hole: 549})).toBeTruthy()
        expect(isValidTypeDist({shot_from:'G',dist_to_hole: 27.5})).toBeTruthy()
    })

    test("Check returns true for valid data at low end of range", () => {
        expect.assertions(5)
        expect(isValidTypeDist({shot_from:'F',dist_to_hole: 5})).toBeTruthy()
        expect(isValidTypeDist({shot_from:'R',dist_to_hole: 5})).toBeTruthy()
        expect(isValidTypeDist({shot_from:'S',dist_to_hole: 5})).toBeTruthy()
        expect(isValidTypeDist({shot_from:'RC',dist_to_hole: 9})).toBeTruthy()
        expect(isValidTypeDist({shot_from:'G',dist_to_hole: 0.3})).toBeTruthy()
    })

    test("Check returns true for random valid data", () => {
        expect.assertions(5)
        expect(isValidTypeDist({shot_from:'F', dist_to_hole: 275})).toBeTruthy()
        expect(isValidTypeDist({shot_from:'R',dist_to_hole: 54})).toBeTruthy()
        expect(isValidTypeDist({shot_from:'S',dist_to_hole: 136})).toBeTruthy()
        expect(isValidTypeDist({shot_from:'RC',dist_to_hole: 485})).toBeTruthy()
        expect(isValidTypeDist({shot_from:'G',dist_to_hole: 18.5})).toBeTruthy()
    })

    test("Check returns true for valid data at high end", () => {
        expect.assertions(3)
        expect(isValidTypeDist({shot_from:'',dist_to_hole: 549})).toBeFalsy()
        expect(isValidTypeDist({shot_from:'F',dist_to_hole: null})).toBeFalsy()
        expect(isValidTypeDist({shot_from:null,dist_to_hole: null})).toBeFalsy()
    })
})

describe('Check invalidFwyRoughSand', () => {
    test('Check returns true with invalid data', () => {
        let actual = invalidFwyRoughSand('F', 550)
        expect(actual).toBeTruthy()
    })
})

describe('Check invalidTee', () => {
    test('Check returns true with invalid data', () => {
        let actual = invalidTee('T', 90)
        expect(actual).toBeTruthy()
    })
})

describe('Check invalidGreen', () => {
    test('Check returns false with valid data', () => {
        let actual = invalidGreen('G', 10)
        expect(actual).toBeFalsy()
    })
})
