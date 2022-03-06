const {DataTypes} = require('sequelize');
module.exports = (sequelize) => {
    const rating = sequelize.define("ratings", {
            rating: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            comment: {
                type: DataTypes.STRING,
            }
        }
    )
    return rating;
}