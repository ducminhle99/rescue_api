const {DataTypes} = require('sequelize');
module.exports = (sequelize) => {
    const User = sequelize.define("users", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        fullName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imageUrl: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.STRING,
            unique: true
        },
        notificationToken:{
            type:DataTypes.STRING,
        }
    })
    return User;
}