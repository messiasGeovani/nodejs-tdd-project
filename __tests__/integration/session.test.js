// supertest library import
const request = require('supertest')

// application import
const app = require('../../src/app')
// factory snnipets code module import
const factory = require('../factories')
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
        const user = await factory.create('User', {
            password: '123123'
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

    it('should not authenticate with invalid credentials', async () => {
        // creating user
        const user = await factory.create('User', {
            password: '123123'
        })

        // requesting the session app route
        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: '123456'
            })

        // expected result
        expect(response.status).toBe(401)
    })

    it('should return jwt token authenticated', async () => {
        // creating user
        const user = await factory.create('User', {
            password: '123123'
        })

        // requesting the session app route
        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: '123123'
            })

        // expected result
        expect(response.body).toHaveProperty('token')
    })
})