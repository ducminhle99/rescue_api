const {DataTypes} = require('sequelize');
module.exports = (sequelize) => {
    const UpgradeRequest = sequelize.define("upgrade_request", {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
        },
        title: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        imageUrl: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.STRING,
            unique: true
        },
        isChecked: {
            type: DataTypes.BOOLEAN,
            default: false
        }
    })
    return UpgradeRequest;
}