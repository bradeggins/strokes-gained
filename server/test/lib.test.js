const knex = require('knex')
const config = require('../../knexfile').test
const db = require('../db/db')

const { calcStrokesGained, validateBool, chooseFilter, 
    strokesGainedPutting, strokesGainedOffTheTee, strokesGainedTeeToGreen,
strokesGainedAroundTheGreen, sumSG, strokesGainedApproach } = require('../lib/lib')

const testDb = knex(config)

const shotObj = {
    round_date: '2020-08-27',
    course:'Harewood',
    shot_from: 'F',
    dist_to_hole: 425,
    holed: "",
    round_id: 3,
    hole: 5, 
    shot_id: 5
}

beforeAll(() =>  testDb.migrate.latest())

afterEach(() => testDb.seed.run())


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
        db.getRoundShots(shotObj, testDb)
            .then((shots) => {
                let actual = strokesGainedPutting(shots, 2)
                expect(actual.length).toBe(2)
            }).catch((err) => {
                expect(err).toBeNull()
            });
   })

   test('Strokes gained putting returns correct number of items for range', () => {
        db.getRoundShots(shotObj, testDb)
            .then((shots) => {
                let actual = strokesGainedPutting(shots, 6)
                expect(actual.length).toBe(0)
            }).catch((err) => {
                expect(err).toBeNull()
            });
    })

    test('Strokes gained putting returns correct number of items for range', () => {
        db.getRoundShots(shotObj, testDb)
            .then((shots) => {
                let actual = strokesGainedPutting(shots, 0)
                expect(actual[3].id).toBe(20)
            }).catch((err) => {
                expect(err).toBeNull()
            });
    })

    test('Strokes gained off the tee returns correct data', () => {
        db.getRoundShots(shotObj, testDb)
            .then((shots) => {
                let actual = strokesGainedOffTheTee(shots)
                expect(actual.length).toBe(4)
            }).catch((err) => {
                expect(err).toBeNull()
            });
    })

    test('Strokes gained off the tee returns correct data', () => {
        db.getRoundShots(shotObj, testDb)
            .then((shots) => {
                let actual = strokesGainedOffTheTee(shots)
                expect(actual[3].dist_to_hole).toBe(451)
            }).catch((err) => {
                expect(err).toBeNull()
            });
    })

    test('Strokes gained Tee to Green returns correct data', () => {
        db.getRoundShots(shotObj, testDb)
            .then((shots) => {
                let actual = strokesGainedTeeToGreen(shots)
                expect(actual.length).toBe(12)
            }).catch((err) => {
                expect(err).toBeNull()
            });
    })

    test('Strokes gained Tee to Green excludes tee shot < 200m', () => {
        let shots = [{shot_from: "T", dist_to_hole: 201}, {shot_from: "F", dist_to_hole: 150}]
        let actual = strokesGainedTeeToGreen(shots)
        expect(actual.length).toBe(1)
    })

    test('Strokes gained around the green', () => {
        db.getRoundShots(shotObj, testDb)
            .then((shots) => {
                let actual = strokesGainedAroundTheGreen(shots)
                expect(actual.length).toBe(2)
            }).catch((err) => {
                expect(err).toBeNull()
            });
    })

    test('Strokes gained approach returns correct shots for range', () => {
        db.getRoundShots(shotObj, testDb)
            .then((shots) => {
                let actual = strokesGainedApproach(shots, 75)
                expect(actual.length).toBe(1)
            }).catch((err) => {
                expect(err).toBeNull()
            });
    })

   
   

    

})