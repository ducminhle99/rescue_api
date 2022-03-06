const {DataTypes} = require('sequelize');
module.exports = (sequelize) => {
    const Statistic = sequelize.define("shop-statistic", {
        shopId:{
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        rating:{
            type: DataTypes.FLOAT,
            default: 0
        },
        review:{
            type: DataTypes.INTEGER,
            default: 0
        },
        numberOfService:{
            type: DataTypes.INTEGER,
            default: 0
        },
        numberOfRescue:{
            type: DataTypes.INTEGER,
            default: 0
        },
        numberOfAppointment:{
            type: DataTypes.INTEGER,
            default: 0
        }
    })
    return Statistic;
}