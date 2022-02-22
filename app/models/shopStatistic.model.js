const {DataTypes} = require('sequelize');
module.exports = (sequelize) => {
    const Statistic = sequelize.define("shop-statistic", {
        shopId:{
            type:DataTypes.INTEGER
        },


    })
    return Statistic;
}