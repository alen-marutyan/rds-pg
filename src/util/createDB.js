const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    username:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: 'postgres'
});


module.exports = {sequelize, DataTypes}
