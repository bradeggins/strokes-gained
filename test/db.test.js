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

