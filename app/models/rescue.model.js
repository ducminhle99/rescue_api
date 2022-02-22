const {DataTypes} = require('sequelize');
module.exports = (sequelize) => {
    const rescue = sequelize.define("rescues", {
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            description: {
                type: DataTypes.TEXT,
            },
            isClose:{
                type: DataTypes.BOOLEAN,
                default: false
            },

        }
    )
    return rescue;
}