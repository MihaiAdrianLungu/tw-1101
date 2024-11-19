const { DataTypes } = require('sequelize');
const { sequelize } = require("../server");

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: {
        type: DataTypes.ENUM,
        values: ['user', 'admin', 'tester'],
        validate: {
            isIn: [['user', 'admin', 'tester']]
        }
    }
}, {
    timestamps: false
})

module.exports = User;