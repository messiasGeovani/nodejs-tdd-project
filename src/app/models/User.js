// bcrypt library import
const bcrypt = require('bcryptjs')

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

    return User
}