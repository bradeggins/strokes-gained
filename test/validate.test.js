const { isValidTypeDist, invalidFwyRoughSand, invalidTee, invalidGreen, isNotNull} = require('../lib/validate')


describe('Check isValidTypeDist function', () => {
    test('Check function for greater than 550m', () => {
        let actual = isValidTypeDist('F', 550)
        let expected = false
        expect(actual).toBe(expected)
    })

    test("Check returns true for valid data", () => {
        expect.assertions(4)
        expect(isValidTypeDist('F', 549)).toBeTruthy()
        expect(isValidTypeDist('R', 5)).toBeTruthy()
        expect(isValidTypeDist('RC', 9)).toBeTruthy()
        expect(isValidTypeDist('G', 0.3)).toBeTruthy()
    })

    test("Check returns true for valid data at high end or range", () => {
        expect.assertions(5)
        expect(isValidTypeDist('F', 549)).toBeTruthy()
        expect(isValidTypeDist('R', 549)).toBeTruthy()
        expect(isValidTypeDist('S', 549)).toBeTruthy()
        expect(isValidTypeDist('RC', 549)).toBeTruthy()
        expect(isValidTypeDist('G', 27.5)).toBeTruthy()
    })

    test("Check returns true for valid data at low end of range", () => {
        expect.assertions(5)
        expect(isValidTypeDist('F', 5)).toBeTruthy()
        expect(isValidTypeDist('R', 5)).toBeTruthy()
        expect(isValidTypeDist('S', 5)).toBeTruthy()
        expect(isValidTypeDist('RC', 9)).toBeTruthy()
        expect(isValidTypeDist('G', 0.3)).toBeTruthy()
    })

    test("Check returns true for random valid data", () => {
        expect.assertions(5)
        expect(isValidTypeDist('F', 275)).toBeTruthy()
        expect(isValidTypeDist('R', 54)).toBeTruthy()
        expect(isValidTypeDist('S', 136)).toBeTruthy()
        expect(isValidTypeDist('RC', 485)).toBeTruthy()
        expect(isValidTypeDist('G', 18.5)).toBeTruthy()
    })

    test("Check returns true for valid data at high end", () => {
        expect.assertions(3)
        expect(isValidTypeDist('', 549)).toBeFalsy()
        expect(isValidTypeDist('F', null)).toBeFalsy()
        expect(isValidTypeDist(null, null)).toBeFalsy()
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
