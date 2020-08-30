const { calcStrokesGained, validateBool, chooseFilter, 
    strokesGainedPutting, strokesGainedOffTheTee, strokesGainedTeeToGreen,
strokesGainedAroundTheGreen, sumSG, strokesGainedApproach } = require('../lib/lib')

const testdata = require('./libtestdata')

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

describe('Check correct funtion for filtering shot data', () => {
   test('Sum SG returns correct number', () => {
        let shots = [{sg: -0.36}, {sg: 0.7}, {sg: -0.5}, {sg: 0.52}]
        let actual = sumSG(shots)
        expect(actual).toBe(0.36)
   })

   test('Strokes gained putting returns correct number of items for range', () => {
        let actual = strokesGainedPutting(testdata, 2)
        expect(actual.length).toBe(2)
   })

   test('Strokes gained putting returns correct number of items for range', () => {
    let actual = strokesGainedPutting(testdata, 6)
    expect(actual.length).toBe(0)
    })

    test('Strokes gained putting returns correct number of items for range', () => {
        let actual = strokesGainedPutting(testdata, 0)
        expect(actual[3].id).toBe(20)
    })

    test('Strokes gained off the tee returns correct data', () => {
        let actual = strokesGainedOffTheTee(testdata)
        expect(actual.length).toBe(4)
    })

    test('Strokes gained off the tee returns correct data', () => {
        let actual = strokesGainedOffTheTee(testdata)
        expect(actual[3].dist_to_hole).toBe(451)
    })

    test('Strokes gained Tee to Green returns correct data', () => {
        let actual = strokesGainedTeeToGreen(testdata)
        expect(actual.length).toBe(12)
    })

    test('Strokes gained Tee to Green excludes tee shot < 200m', () => {
        let shots = [{shot_from: "T", dist_to_hole: 100}, {shot_from: "F", dist_to_hole: 150}]
        let actual = strokesGainedTeeToGreen(shots)
        console.log(actual);
        expect(actual.length).toBe(1)
    })

    test('Strokes gained around the green', () => {
        let actual = strokesGainedAroundTheGreen(testdata)
        expect(actual.length).toBe(2)
    })

   
   

    

})