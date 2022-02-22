const {DataTypes} = require('sequelize');
module.exports = (sequelize) => {
    const file = sequelize.define("files", {
            path: {
                type: DataTypes.STRING
            },
            fileName: {
                type: DataTypes.STRING
            },
        }
    )
    return file;
}