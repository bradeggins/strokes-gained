const request = require('supertest')
const server = require('../../server')
const db = require('../db/db')
const cheerio = require('cheerio')

jest.mock('../db/db', () => {
    return {
        addRound: jest.fn()
    }
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
                expect(db.addRound).toHaveBeenCalledWith({round_date:'2020-08-20', course:'ANGC'})
            }).catch((err) => {
                expect(err).toBeNull()
            });
    } )
    
})

