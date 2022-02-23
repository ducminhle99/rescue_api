const {DataTypes} = require('sequelize');
module.exports = (sequelize) => {
    const Appointment = sequelize.define("appointments", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        time:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        isConfirmed:{
            type: DataTypes.BOOLEAN,
            default:false
        }
    })
    return Appointment;
}