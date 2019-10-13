// bcrypt library import
const bcrypt = require('bcryptjs')
// user model import
const { User } = require('../../src/app/models')
// truncate module import
const truncate = require('../utils/truncate')

describe('User', () => {
    beforeEach(async () => {
        await truncate()
    })

    it('should encrypt user password', async () => {
        const user = await User.create({
            name: 'messias',
            email: 'messias@email.com',
            password: '123456'
        })

        // comparing hashes
        const compareHash = await bcrypt.compare('123456', user.password_hash)
        expect(compareHash).toBe(true)
    })
})