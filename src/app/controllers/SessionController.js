// user model import
const { User } = require('../models')

/**
 * Session controller object
 */
exports.SessionController = new class {
    async store(req, res) {
        // getting the body params
        const { email, password } = req.body

        // getting a user with the email obtained
        const user = await User.findOne({ where: { email } })

        // Checking if the user exist
        if (!user) {
            res.status(404).json({
                message: 'User not found'
            })
        }

        // Checking the password
        if (!(await user.checkPassword(password))) {
            return res.status(401).json({
                message: 'Invalid password'
            })
        }

        return res.json({
            user,
            token: user.generateToken()
        })
    }
}