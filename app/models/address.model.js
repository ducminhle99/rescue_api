const {DataTypes} = require('sequelize');
module.exports = (sequelize) => {
    const address = sequelize.define("addresses", {
            name: {
                type: DataTypes.STRING,
            },
            latitude: {
                type: DataTypes.STRING,
            },
            longitude: {
                type: DataTypes.STRING,
            },
        }
    )
    return address;
}