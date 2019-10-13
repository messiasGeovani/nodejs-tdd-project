// supertest library import
const request = require('supertest')

// application import
const app = require('../../src/app')
// user model import
const { User } = require('../../src/app/models/')
// truncate database module
const truncate = require('../utils/truncate')

/**
 * Authentication test group
 */
describe('Authentication', () => {

    // function that runs before each test
    beforeEach(async () => {
        await truncate()
    })

    // teste description
    it('should authenticate with valid credentials', async () => {
        // creating user
        const user = await User.create({
            name: 'Messias',
            email: 'messias@email.com',
            password_hash: '123123'
        })

        // requesting the session app route
        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: '123123'
            })

        // expected result
        expect(response.status).toBe(200)
    })
})