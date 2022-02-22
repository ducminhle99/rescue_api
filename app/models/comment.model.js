const {DataTypes} = require('sequelize');
module.exports = (sequelize) => {
    const comment = sequelize.define("comments", {
            content: {
                type: DataTypes.TEXT,
                allowNull: false,
            }
        }
    )
    return comment;
}