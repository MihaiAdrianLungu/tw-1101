const { DataTypes } = require("sequelize");
const { sequelize } = require("../server");

const Order = sequelize.define("Order", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    status: DataTypes.STRING,
    value: DataTypes.INTEGER
})

module.exports = Order;