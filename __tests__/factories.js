// factory module import
const { factory } = require('factory-girl')
// user model import
const { User } = require('../src/app/models')

/**
 * simplifying repetitive code snippets
 */
factory.define('User', User, {
    name: 'Messias',
    email: 'messias.morais@etec.sp.gov.br',
    password: '123456'
})

module.exports = factory