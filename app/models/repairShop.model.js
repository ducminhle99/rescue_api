const {DataTypes} = require('sequelize');
module.exports = (sequelize) => {
    const RepairShop = sequelize.define("repair_shops", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imageUrl: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        email:{
            type:DataTypes.STRING,
            unique: true,
        },
        about:{
            type:DataTypes.TEXT,
        },
        rating:{
            type:DataTypes.FLOAT
        },
        review:{
            type:DataTypes.INTEGER
        },
        notificationToken:{
            type:DataTypes.STRING,
        }
    })
    return RepairShop;
}