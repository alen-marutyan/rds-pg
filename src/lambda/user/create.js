// const {validateUser, sendResponse} = require('../../util/userSchema');
// const bcrypt = require('bcryptjs');
const {sequelize, DataTypes} = require('../../util/createDB')
const User = require('../../models/user')

module.exports.handler = async (event) => {
    const { username, password } = JSON.parse(event.body)

    console.log('User', User);
    // if (!validateUser(username,password)){
    //     return sendResponse(500, 'Error Validate' )
    // }

    // const hashPassword = bcrypt.hashSync(password,16)

    // const res = await User.create({
    //     username: username,
    //     password: password
    // });

    let newVar = await User.create({
        username: username,
        password: password
    })

    console.log('newVar', newVar)

    return {
        statusCode: 200,
        body: "Hi"
    }
}
