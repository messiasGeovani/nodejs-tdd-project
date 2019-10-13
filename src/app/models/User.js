// bcrypt library import
const bcrypt = require('bcryptjs')
// jwt token library import
const jwt = require('jsonwebtoken')

/**
 * User model
 */
module.exports = (sequelize, DataTypes) => {
    // setting the model name
    const User = sequelize.define("User", {
        // model structure
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.VIRTUAL,
        password_hash: DataTypes.STRING
    }, {
        hooks: {
            beforeSave: async user => {
                if (user.password) {
                    user.password_hash = await bcrypt.hash(user.password, 8)
                }
            }
        }
    })

    // password checking method
    User.prototype.checkPassword = function(password) {
        return bcrypt.compare(password, this.password_hash)
    }

    // token generator method
    User.prototype.generateToken = function() {
        return jwt.sign(
            {
                id: this.id
            },
            process.env.APP_SECRET        
        )
    }

    return User
}