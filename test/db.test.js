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
    test('Test returns correct amount of holes', () => {
        return db.countHoles(3, testDb)
            .then((result) => {
                expect(result).toBe(5)
            }).catch((err) => {
                expect(err).toBeNull()
            });
    })
})

