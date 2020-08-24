const knex = require('knex')
const config = require('../knexfile').test
const db = require('../db/db')

const testDb = knex(config)

beforeAll(() =>  testDb.migrate.latest())

afterEach(() => testDb.seed.run())

describe('Check test setup', () => {
    test('Ensure jest setup working', () => {
        expect(true).toBeTruthy()
    })
})

describe('Check addround function', () => {
    test('Check addround function adds a new round', () => {
        expect.assertions(1)
        return db.addRound('2020-08-21', 'Harewood', testDb)
            .then((result) => {
                expect(result[0]).toBe(4)            
            }).catch((err) => {
                expect(err).toBeNull()
            });
    })
})

describe('Check entershot function', () => {
    test('Enter round adds a shot to shots table', () => {
        return db.enterShot('F', 425, "", 3, testDb)
            .then((result) => {
                return db.getRoundShots(3, testDb)
                .then((result) => {
                    expect(result.length).toBe(21)
                })
            })
    })
})

describe('Check getRoundShots function', () => {
    test('Function returns correct round details', () => {
        expect.assertions(1)
        return db.getRoundShots(3, testDb)
            .then((result) => {
                expect(result[0].dist_to_hole).toBe(425)
            })
            .catch((err) => {
                expect(err).toBeNull()
            })
    })
})

describe('Check countHoles Function', () => {
    test('Test counts the correct current hole', () => {
        return db.countHoles(3, testDb)
            .then((result) => {
                expect(result).toBe(6)
            }).catch((err) => {
                expect(err).toBeNull()
            });
    })
})

describe('Check getAvgStrokesToHole returns correct data', () => {
    test('Test gets correct avgStrokes for T', () => {
        return db.getAvgStrokesToHole('T', 255, testDb)
            .then((result) => {
                expect(result.strokesToHole).toBe(3.64)
            }).catch((err) => {
                expect(err).toBeNull()
            });
    })

    test('Test gets correct avgStrokes for F', () => {
        return db.getAvgStrokesToHole('F', 549, testDb)
            .then((result) => {
                expect(result.strokesToHole).toBe(4.94)
            }).catch((err) => {
                expect(err).toBeNull()
            });
    })

    test('Test gets correct avgStrokes for G', () => {
        return db.getAvgStrokesToHole('G', 27, testDb)
            .then((result) => {
                expect(result.strokesToHole).toBe(2.39)
            }).catch((err) => {
                expect(err).toBeNull()
            });
    })

    test('Test gets correct avgStrokes', () => {
        return db.getAvgStrokesToHole('RC', 366, testDb)
            .then((result) => {
                expect(result.strokesToHole).toBe(4.75)
            }).catch((err) => {
                expect(err).toBeNull()
            });
    })
})

describe('Check calcStrokesGained function example from ESC', () => {
    test('Calculates the correct SG for hole, nexthole', () => {
        let actual = db.calcStrokesGained(4.0, 3.7)
        expect(actual).toBe(-0.70)
    })

    test('Calculates the correct SG for hole, nexthole', () => {
        let actual = db.calcStrokesGained(3.7, 3.2)
        expect(actual).toBe(-0.50)
    })

    test('Calculates the correct SG for hole, nexthole', () => {
        let actual = db.calcStrokesGained(3.2, 1.8)
        expect(actual).toBe(0.40)
    })

    test('Calculates the correct SG for hole, nexthole', () => {
        let actual = db.calcStrokesGained(1.8, 0)
        expect(actual).toBe(0.80)
    })

    test('Calculates the correct SG for hole when nexthole does not exist', () => {
        let actual = db.calcStrokesGained(1.8)
        expect(actual).toBe(0.80)
    })
})

