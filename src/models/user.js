const {sequelize, DataTypes} = require('../util/createDB')

    let User =  sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING
        }
    },{
        freezeTableName: true,
    });

sequelize.sync({force: true}).then(r => console.log('r',r)).catch(err=>console.log('err', err.message));


module.exports = User
