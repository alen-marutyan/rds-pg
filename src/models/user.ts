
export = (sequelize, DataTypes)=>{
    let User =  sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email:{
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        freezeTableName: true,
    });

    return User
}
