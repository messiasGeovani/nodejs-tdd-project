// jwt token library import
const jwt = require('jsonwebtoken')
// promisse callback convert library import
const { promisify } = require('util')

/**
 * Authentication middleware
 */
module.exports = async (req, res, next) => {
    // getting the token
    const authHeader = req.headers.authorization

    // checking the token
    if (!authHeader) {
        return res.status(401).json({
            message: 'Token not provided'
        })
    }

    // spliting the token
    const [, token] = authHeader.split(' ')

    try {
        // decoding the token
        const decoded = await promisify(jwt.verify)(token, process.env.APP_SECRET)

        // setting the user that contains this token
        req.userId = decoded.id

        return next()
    } catch (err) {
        return res.status(401).json({
            message: 'Token invalid'
        })
    }

    return next()
}