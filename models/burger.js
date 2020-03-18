// var orm = require("../config/orm");
var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            default: false
        }
    });
    return Burger;
}
