const {DataTypes} = require('sequelize');
module.exports = (sequelize) => {
    const notification = sequelize.define("notifications", {
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
            senderId:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            receiver:{
                type: DataTypes.INTEGER,
                allowNull:false
        }
        }
    )
    return notification;
}