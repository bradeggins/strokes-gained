const request = require('supertest')
const server = require('../server')
const db = require('../db/db')
const cheerio = require('cheerio')

jest.mock('../db/db', () => {
    return {
        addRound: jest.fn()
    }
})

describe('GET /addround', () => {

    beforeEach(() => {
        db.addRound.mockImplementation(() => {
            Promise.resolve('Promised resolved!')
        })   
    })
    
    afterEach(() => {
        db.addRound.mockRestore()
    })
    test('/addround renders a form', () => {
        expect.assertions(2)
        return request(server)
            .get('/newround')
            .then((result) => {
                const $ = cheerio.load(result.text)
                expect($('form').attr('action')).toBe('/addround')
                expect($('form').attr('method')).toBe('post')
            }).catch((err) => {
                expect(err).toBeNull()
            });
    } )
    
})

describe('POST /addround', () => {

    beforeEach(() => {
        db.addRound.mockImplementation(() => {
            Promise.resolve('Promised resolved!')
        })   
    })
    
    afterEach(() => {
        db.addRound.mockRestore()
    })
    test('/addround posts correct data', () => {
        return request(server)
            .post('/addround')
            .send({round_date:'2020-08-20', course: 'ANGC' })
            .then((result) => {
                expect(db.addRound).toHaveBeenCalledWith('2020-08-20', 'ANGC')
            }).catch((err) => {
                expect(err).toBeNull()
            });
    } )
    
})

