const {DataTypes} = require('sequelize');
module.exports = (sequelize) => {
    const services = sequelize.define("services", {
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            price: {
                type: DataTypes.STRING,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false
            },
        }
    )
    return services;
}