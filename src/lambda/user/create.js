const {validateUser, sendResponse} = require('../../util/userSchema');
const bcrypt = require('bcryptjs');

const {User} = require('../../models/index')

module.exports.handler = async (event) => {
    const { email, username, password } = JSON.parse(event.body);


    if (!validateUser(email,username,password)){
        return sendResponse(500, 'Error Validate' )
    }
    const hashPassword = bcrypt.hashSync(password)

    try {
        let newVar = await User.create({
            email: email,
            username: username,
            password: hashPassword
        })

        return sendResponse(200, newVar.dataValues)
    }catch (e) {
        return sendResponse(e.statusCode, JSON.stringify(e.message))
    }


}
