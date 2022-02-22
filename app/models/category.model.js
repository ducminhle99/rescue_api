const {DataTypes} = require('sequelize');
module.exports = (sequelize) => {
    const Category = sequelize.define("categories", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        catName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    })
    return Category;
}