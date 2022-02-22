const  {DataTypes} = require('sequelize');
module.exports = (sequelize) => {
    const Role = sequelize.define("roles", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        roleType: {
            type: DataTypes.ENUM("ADMIN","USER","SHOP","INACTIVE_USER"),
            allowNull: false
        }
    })
    return Role;
}