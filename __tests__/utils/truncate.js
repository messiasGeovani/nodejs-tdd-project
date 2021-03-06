// sequelize models import
const { sequelize } = require('../../src/app/models')

// truncate database module
exports.Truncate = class {
    constructor() {
        return Promise.all(
            // deleting all data
            Object.keys(sequelize.models).map(key => {
                return sequelize.models[key].destroy({
                    truncate:  true,
                    force: true
                })
            })
        )
    }
}