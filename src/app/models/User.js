/**
 * User model
 */
module.exports = (sequelize, DataTypes) => {
    // setting the model name
    const User = sequelize.define("User", {
        // model structure
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING
    })

    return User
}