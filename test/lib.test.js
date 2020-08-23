const validate = require('../lib/validate')


describe('Check isValidTypeDist function', () => {
    test('Check function for greater than 550m', () => {
        let actual = validate.isValidTypeDist('F', 550)
        let expected = false
        expect(actual).toBe(expected)
    })

    test("Check returns true for valid data", () => {
        expect.assertions(4)
        expect(validate.isValidTypeDist('F', 549)).toBeTruthy()
        expect(validate.isValidTypeDist('R', 5)).toBeTruthy()
        expect(validate.isValidTypeDist('RC', 9)).toBeTruthy()
        expect(validate.isValidTypeDist('G', 0.3)).toBeTruthy()
    })

    test("Check returns true for valid data at high end or range", () => {
        expect.assertions(5)
        expect(validate.isValidTypeDist('F', 549)).toBeTruthy()
        expect(validate.isValidTypeDist('R', 549)).toBeTruthy()
        expect(validate.isValidTypeDist('S', 549)).toBeTruthy()
        expect(validate.isValidTypeDist('RC', 549)).toBeTruthy()
        expect(validate.isValidTypeDist('G', 27.5)).toBeTruthy()
    })

    test("Check returns true for valid data at low end of range", () => {
        expect.assertions(5)
        expect(validate.isValidTypeDist('F', 5)).toBeTruthy()
        expect(validate.isValidTypeDist('R', 5)).toBeTruthy()
        expect(validate.isValidTypeDist('S', 5)).toBeTruthy()
        expect(validate.isValidTypeDist('RC', 9)).toBeTruthy()
        expect(validate.isValidTypeDist('G', 0.3)).toBeTruthy()
    })

    test("Check returns true for random valid data", () => {
        expect.assertions(5)
        expect(validate.isValidTypeDist('F', 275)).toBeTruthy()
        expect(validate.isValidTypeDist('R', 54)).toBeTruthy()
        expect(validate.isValidTypeDist('S', 136)).toBeTruthy()
        expect(validate.isValidTypeDist('RC', 485)).toBeTruthy()
        expect(validate.isValidTypeDist('G', 18.5)).toBeTruthy()
    })

    test("Check returns true for valid data at high end", () => {
        expect.assertions(3)
        expect(validate.isValidTypeDist('', 549)).toBeFalsy()
        expect(validate.isValidTypeDist('F', null)).toBeFalsy()
        expect(validate.isValidTypeDist(null, null)).toBeFalsy()
    })
})