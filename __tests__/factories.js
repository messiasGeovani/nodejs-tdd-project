// faker librart import
const faker = require('faker')
// factory module import
const { factory } = require('factory-girl')
// user model import
const { User } = require('../src/app/models')

/**
 * simplifying repetitive code snippets
 */
factory.define('User', User, {
    // creating fake data
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password()
})

module.exports = factory